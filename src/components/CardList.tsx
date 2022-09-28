import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getHand, throwCards } from '../api'
import { HandInfo, ICard } from '../interfaces'
import Card from './Card'
import { Loader } from '@mantine/core';
import StartButton from './StartButton'
import ThrowCardsButton from './ThrowCardsButton'


interface Props {
  showHistory: boolean;
}

const CardList = ({ showHistory }: Props) => {
    const [initGame, setInitGame] = useState(false) 
    const [hand, setHand] = useState<HandInfo | null>(null)
    const [selectedCards, setSelectedCards] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isNewGameLoading, setIsNewGameLoading] = useState(false)
    const [tempCards, setTempCards] = useState<ICard[]>([])

    const handleThrowCards = async () => {
      if (!hand) return

      setIsLoading(true)

      const handResponse = await throwCards({
        gameId: hand.gameId,
        cardIds: selectedCards,
        previousHandId: hand.handId
      })

      if (handResponse) { 
        setHand(handResponse)
        setSelectedCards([])
        setIsLoading(false)
      }
    }

    const disabledBtn = () => {
      if (selectedCards.length === 0) return true;
      if (isLoading) return true;
      if (hand && selectedCards.length > hand.gameCardCount) return true
    }

    useEffect(() => {
        if (initGame && !hand) {
          setIsNewGameLoading(true);
        getHand().then(res => {
            if (res) {
              setHand(res)
              setTempCards([])
              setIsNewGameLoading(false);
            }
        })
      }
    },[initGame])

    useEffect(() => {
      if (hand?.gameCardCount === 0) {
        setInitGame(false)
        setHand(null)
      }
    }, [hand?.gameCardCount])

    useEffect(() => {
      if (hand && hand.gameCardCount === 0 && hand.cards.length > 0) {
        setTempCards(hand.cards)
      }
    }, [hand?.gameCardCount])

    const cardList = tempCards.length > 0 ? tempCards : hand?.cards 

  return (
    <CardListWrapper style={{ display: showHistory ? 'none' : 'flex'}}>
      <h1>Random cards</h1>
      {initGame && !hand &&
      <>
      <h2>Waiting for card hand...</h2>
      <Loader variant='dots' />
      </>}
      <h3>{hand && `${hand.gameCardCount} cards left`}</h3>
      <div className='card-list'>
        {cardList?.map(card => {
          return <Card key = {card.cardId} {...card} 
          selectedCards={selectedCards} 
          setSelectedCards={setSelectedCards} 
          isLoading = {isLoading} 
          tempCards={tempCards}/>

        })}
        
        </div>
        {!initGame && tempCards.length === 0 && <StartButton text='Start' isNewGameLoading={isNewGameLoading} setInitGame={setInitGame} />}
        {!hand && tempCards.length > 0  && <StartButton text='New game' isNewGameLoading={isNewGameLoading} setInitGame={setInitGame} />}
        {hand && hand.gameCardCount > 0 && <ThrowCardsButton handleThrowCards={handleThrowCards} 
         disableBtn={disabledBtn()!} isLoading={isLoading} />}
    </CardListWrapper>
  )
}

export default CardList

const CardListWrapper = styled.div `
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .card-list {
    display: grid;
    grid-template-columns: repeat(5, 180px);
    gap: 0.9rem;
  }
`

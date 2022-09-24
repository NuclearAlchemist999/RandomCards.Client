import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getHand } from '../api'
import { HandInfo } from '../interfaces'
import Card from './Card'

const CardList = () => {
    const [hand, setHand] = useState<HandInfo | null>(null)
    const [selectedCards, setSelectedCards] = useState<string[]>([])

    
    useEffect(() => {
        if (!hand) {
        getHand().then(res => {
            if (res) setHand(res)
        })
      }
    },[])

    if (!hand) return <h1>Waiting for card hand...</h1>

  return (
    <CardListWrapper>
        {hand.cards.map(card =>  {
            return <Card key = {card.cardId} {...card} selectedCards={selectedCards} setSelectedCards={setSelectedCards} />
        })}
    </CardListWrapper>
  )
}

export default CardList

const CardListWrapper = styled.div `
`

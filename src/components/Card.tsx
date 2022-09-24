import React from 'react'
import styled from 'styled-components'
import { ICard } from '../interfaces'

interface CardProps {
  cardId: string
  cardName: string
  selectedCards: string[]
  setSelectedCards: React.Dispatch<React.SetStateAction<string[]>>
}

const Card = ({ cardId, cardName, selectedCards, setSelectedCards }: CardProps) => {
  const selectCard = () => {
        if (selectedCards.some(x => x === cardId)) {
          setSelectedCards(selectedCards.filter(x => x !== cardId))
       } else
        setSelectedCards(cards => [...cards, cardId])
  }

  return (
    <CardWrapper onClick={selectCard}>
      {cardName}
    </CardWrapper>
  )
}

export default Card

const CardWrapper = styled.div`
  box-shadow: 1px 5px 15px rgba(0, 0, 0, 0.4);
  width: 180px;
  height: 280px;
  border-radius: 12px;

  &:hover {
    cursor: pointer;
  }

`
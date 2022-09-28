import React from 'react'
import styled from 'styled-components'
import { ICard } from '../interfaces'
import { getSuit, getValue } from '../utils'

interface CardProps extends ICard {
  selectedCards: string[]
  setSelectedCards: React.Dispatch<React.SetStateAction<string[]>>
  isLoading: boolean
  tempCards: ICard[]
}

const Card = ({ tempCards, isLoading, cardId, cardName, selectedCards, setSelectedCards }: CardProps) => {
  
  const selectCard = () => {
        if (isLoading || tempCards.length > 0) return
        if (selectedCards.some(x => x === cardId)) {
          setSelectedCards(selectedCards.filter(x => x !== cardId))
        } else {
          setSelectedCards(cards => [...cards, cardId])
        }
  }

  return (
    <CardWrapper isSelected={selectedCards.some(x => x === cardId)} onClick={selectCard}>
      <section className='card-top'>
        <span style={{ fontFamily: 'Old Standard TT'}}>{getValue(cardName)}</span>
      </section>
      <section className='card-middle'>
        {getSuit(cardName)}
      </section>
      <section className='card-bottom'></section>
    </CardWrapper>
  )
}

export default Card

const CardWrapper = styled.div<{isSelected: boolean}>`
  box-shadow: ${props => props.isSelected ? '' : '1px 5px 15px rgba(0, 0, 0, 0.4)'};
  background: ${props => props.isSelected ? 'rgba(0, 0, 0, 0.1)' : ''};
  width: 180px;
  height: 280px;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;

  display: grid;
  grid-template-rows: 10% 80% 10%;
  grid-template-areas:
  "cardTop"
  "cardMiddle"
  "cardBottom";

  .card-top {
    grid-area: cardTop;
    padding: 0.5rem;
    font-family: 'Aref Ruqaa Ink', serif !important;

    span {
      font-size: 1.5rem;
      margin-left: 0.5rem;
    }
  }

  .card-middle {
    grid-area: cardMiddle;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-bottom {
    grid-area: cardBottom;
  }

  .icon {
    font-size: 2.5rem;
  }

  &:hover {
    cursor: ${props => props.isSelected ? '' : 'pointer'};
    transform: ${props => props.isSelected ? '' : 'translateY(-2px)'}
  }
`
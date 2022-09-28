import { useState } from 'react'
import styled from 'styled-components'
import CardList from './CardList'
import GameHistory from './GameHistory'

const CardContainer = () => {
  const [showHistory, setShowHistory] = useState(false)

  return (
    <CardContainerWrapper>
      <section className='navigation'>
        <button onClick={() => setShowHistory(!showHistory)}>
          {showHistory ? 'Hide history' : 'Show history'}
        </button>
      </section>
      <CardList showHistory={showHistory} />
      <GameHistory showHistory={showHistory} />
    </CardContainerWrapper>
  )
}

export default CardContainer

const CardContainerWrapper = styled.div`
  
  .navigation {
    display: flex;
    justify-content: center;
  }

  button {
    border: none;
    border-radius: 8px;
    padding: 0.3rem 1rem;
    background: #0a0875;
    color: #eeeeee;
    font-size: 1.4rem;
    margin-top: 1rem;
    box-shadow: -1px 5px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
      transform: translateY(-1px);
      background: #434188;
    }
  }
`
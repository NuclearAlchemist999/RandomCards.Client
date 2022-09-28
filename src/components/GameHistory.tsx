import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getHistory } from '../api'
import { HandInfo } from '../interfaces'

const GameHistory = ({ showHistory }: { showHistory: boolean }) => {
    const [historyItems, setHistoryItems] = useState<HandInfo[] | null>(null)
   
    useEffect(() => {
        getHistory().then(res => {
            if (res) setHistoryItems(res.historyItems)
        })
    }, [showHistory])

    const renderItemList = () => {
        return <section className='history-item-list'>
          {historyItems?.map(item => {
            return <div className='history-item' key={item.handId}>
              {item.cards.map(card => {
                return <div key={card.cardId}>
                  {card.cardName}
                </div>
              })}
            </div>
          })}
        </section>
    }

  return (
    <GameHistoryWrapper style={{ display: showHistory ? 'flex' : 'none' }}>
      <h1>Game history</h1>
      {!historyItems ? <h3>Loading game history...</h3> : renderItemList()}
    </GameHistoryWrapper>
  )
}

export default GameHistory

const GameHistoryWrapper = styled.div`
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .history-item-list {
      display: grid;
      grid-template-columns: repeat(4, 200px);
    }

    .history-item {
      box-shadow: -1px 3px 7px rgba(0, 0, 0, 0.3);
      margin: 0.3rem;
      padding: 2rem;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: 700;
    }
`

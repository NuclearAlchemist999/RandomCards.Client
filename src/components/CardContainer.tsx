import React from 'react'
import styled from 'styled-components'
import CardList from './CardList'

const CardContainer = () => {
  return (
    <CardContainerWrapper>
      <CardList />
    </CardContainerWrapper>
  )
}

export default CardContainer

const CardContainerWrapper = styled.div`
`
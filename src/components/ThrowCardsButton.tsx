import styled from "styled-components"
import { StyledStartButton } from "./styled"
import { Loader } from '@mantine/core';

interface ButtonProps {
    handleThrowCards: () => Promise<void>
    disableBtn: boolean
    isLoading: boolean
}

const ThrowCardsButton = ({ handleThrowCards, disableBtn, isLoading }: ButtonProps) => {
    return <StyledThrowCardsButton onClick={handleThrowCards} disabled={disableBtn}>
        {!isLoading && 'Throw cards'}
        {isLoading && 'Loading cards'}
        {isLoading && <Loader style={{ marginLeft: '0.5rem', marginTop: '3px'}} variant='dots'/>}
    </StyledThrowCardsButton>
}

export default ThrowCardsButton

const StyledThrowCardsButton = styled(StyledStartButton)`
    display: flex;
    align-items: center;
    padding: 0.4rem 0.6rem;
    
    &:disabled {
        box-shadow: none;
        background: #dedede;
        pointer-events: none;
    }
`
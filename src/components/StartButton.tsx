import { GiCardRandom } from 'react-icons/gi';
import { StyledStartButton } from './styled'

interface ButtonProps {
    text: string
    isNewGameLoading: boolean
    setInitGame: React.Dispatch<React.SetStateAction<boolean>>
}

const StartButton = ({ text, isNewGameLoading, setInitGame }: ButtonProps) => {
    return <StyledStartButton disabled={isNewGameLoading} onClick={() => setInitGame(true)}>
      {text} <GiCardRandom style={{ fontSize: '3rem', marginLeft: '0.5rem' }} />
    </StyledStartButton>
}

export default StartButton;
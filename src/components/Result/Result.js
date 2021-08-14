import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { colors } from '../../colors'

import {
  ResultContainer,
  ResultText,
  ResultPlayAgainButton,
} from './Result.styles'

const Result = ({ result, score, setScore }) => {
  let history = useHistory()

  useEffect(() => {
    // Change score after the end of the result animation
    setTimeout(() => {
      if (result === 'draw') return

      if (result === 'win') setScore(score + 1)
      else if (result === 'lose') setScore(score - 1)
    }, 600)

    // eslint-disable-next-line
  }, [result])

  const handleClick = () => history.push('/')

  let resultText = 'DRAW'

  if (result === 'win') {
    resultText = 'YOU WIN'
  } else if (result === 'lose') {
    resultText = 'YOU LOSE'
  }

  return (
    <ResultContainer
      initial={{ opacity: 0, y: 50, visibility: 'hidden' }}
      animate={{ opacity: 1, y: 0, visibility: 'visible' }}
      transition={{ delay: 0.5 }}
    >
      <ResultText>{resultText}</ResultText>
      <ResultPlayAgainButton
        bgColor={colors.fontColor}
        color={colors.darkText}
        onClick={handleClick}
      >
        PLAY AGAIN
      </ResultPlayAgainButton>
    </ResultContainer>
  )
}

export default Result

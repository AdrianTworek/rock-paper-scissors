import { useState, useEffect } from 'react'
import usePickStyles from './usePickStyles'

import Result from '../Result/Result'
import { colors } from '../../colors'

import {
  SelectionBoardContainer,
  SelectionBoardPlayer,
  SelectionBoardPick,
  SelectionBoardImage,
  SelectionBoardText,
  SelectionBoardAI,
} from './SelectionBoard.styles'

const SelectionBoard = ({
  playerPick,
  computerPick,
  getResult,
  score,
  setScore,
}) => {
  const [result, setResult] = useState('')

  useEffect(() => {
    setResult(getResult(playerPick, computerPick))
  }, [getResult, playerPick, computerPick])

  // Get styles for both player and computer pick from the custom hook
  let {
    image,
    alt,
    bgColor,
    outerShadow,
    imageComputer,
    altComputer,
    bgColorComputer,
    outerShadowComputer,
  } = usePickStyles(playerPick, computerPick)

  // Settle the winner to add animation in styled components
  let playerResult, computerResult

  if (result === 'win') {
    playerResult = 'win'
    computerResult = 'lose'
  } else if (result === 'lose') {
    playerResult = 'lose'
    computerResult = 'win'
  } else {
    playerResult = 'draw'
    computerResult = 'draw'
  }

  // Set default styles for '/selection' route path
  if (
    image === './images/icon-.svg' &&
    imageComputer === './images/icon-.svg'
  ) {
    image = './images/icon-rock.svg'
    alt = 'rock icon'
    bgColor = colors.rockGradient
    outerShadow = colors.outerRockShadow
    imageComputer = image
    altComputer = alt
    bgColorComputer = bgColor
    outerShadowComputer = outerShadow
  }

  return (
    <SelectionBoardContainer
      initial={{ opacity: 0, x: '100vw' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', duration: 0.5 }}
      exit={{ opacity: 0, x: '100vw' }}
    >
      <SelectionBoardPlayer>
        <SelectionBoardPick
          bgColor={bgColor}
          innerBg={colors.playButtonsBg}
          innerShadow={colors.innerShadow}
          outerShadow={outerShadow}
          result={playerResult}
        >
          <SelectionBoardImage src={image} alt={alt}></SelectionBoardImage>
        </SelectionBoardPick>
        <SelectionBoardText>YOU PICKED</SelectionBoardText>
      </SelectionBoardPlayer>
      <SelectionBoardAI>
        <SelectionBoardPick
          bgColor={bgColorComputer}
          innerBg={colors.playButtonsBg}
          innerShadow={colors.innerShadow}
          outerShadow={outerShadowComputer}
          result={computerResult}
        >
          <SelectionBoardImage
            src={imageComputer}
            alt={altComputer}
          ></SelectionBoardImage>
        </SelectionBoardPick>
        <SelectionBoardText>AI PICKED</SelectionBoardText>
      </SelectionBoardAI>
      <Result result={result} score={score} setScore={setScore} />
    </SelectionBoardContainer>
  )
}

export default SelectionBoard

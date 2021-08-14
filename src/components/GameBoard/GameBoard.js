import { useHistory } from 'react-router-dom'
import { colors } from '../../colors'

import {
  BoardContainer,
  BoardButton,
  BoardButtonImage,
} from './GameBoard.styles'

const GameBoard = ({ bonusLayout, setPlayerPick, handleComputerPick }) => {
  let history = useHistory()

  const handleClick = (pick) => {
    setPlayerPick(pick)
    handleComputerPick()
    history.push('/selection')
  }

  return (
    <BoardContainer
      bonusLayout={bonusLayout}
      initial={{ opacity: 0, x: '-100vw' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      exit={{
        x: '-100vw',
        opacity: 0,
        transition: { duration: 0.3 },
      }}
    >
      <BoardButton
        bgColor={colors.paperGradient}
        innerBg={colors.playButtonsBg}
        innerShadow={colors.innerShadow}
        outerShadow={colors.outerPaperShadow}
        bonusLayout={bonusLayout}
        onClick={() => handleClick('paper')}
      >
        <BoardButtonImage
          src="./images/icon-paper.svg"
          alt="paper icon"
          bonusLayout={bonusLayout}
        ></BoardButtonImage>
      </BoardButton>
      <BoardButton
        bgColor={colors.scissorsGradient}
        innerBg={colors.playButtonsBg}
        innerShadow={colors.innerShadow}
        outerShadow={colors.outerScissorsShadow}
        bonusLayout={bonusLayout}
        onClick={() => handleClick('scissors')}
      >
        <BoardButtonImage
          src="./images/icon-scissors.svg"
          alt="scissors icon"
          bonusLayout={bonusLayout}
        ></BoardButtonImage>
      </BoardButton>
      <BoardButton
        bgColor={colors.rockGradient}
        innerBg={colors.playButtonsBg}
        innerShadow={colors.innerShadow}
        outerShadow={colors.outerRockShadow}
        bonusLayout={bonusLayout}
        onClick={() => handleClick('rock')}
      >
        <BoardButtonImage
          src="./images/icon-rock.svg"
          alt="rock icon"
          bonusLayout={bonusLayout}
        ></BoardButtonImage>
      </BoardButton>

      {bonusLayout && (
        <>
          <BoardButton
            bgColor={colors.spockGradient}
            innerBg={colors.playButtonsBg}
            innerShadow={colors.innerShadow}
            outerShadow={colors.outerSpockShadow}
            bonusLayout={bonusLayout}
            onClick={() => handleClick('spock')}
          >
            <BoardButtonImage
              src="./images/icon-spock.svg"
              alt="spock icon"
              bonusLayout={bonusLayout}
            ></BoardButtonImage>
          </BoardButton>
          <BoardButton
            bgColor={colors.lizardGradient}
            innerBg={colors.playButtonsBg}
            innerShadow={colors.innerShadow}
            outerShadow={colors.outerLizardShadow}
            bonusLayout={bonusLayout}
            onClick={() => handleClick('lizard')}
          >
            <BoardButtonImage
              src="./images/icon-lizard.svg"
              alt="lizard icon"
              bonusLayout={bonusLayout}
            ></BoardButtonImage>
          </BoardButton>
        </>
      )}
    </BoardContainer>
  )
}

export default GameBoard

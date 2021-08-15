import PropTypes from 'prop-types'
import { colors } from '../../colors'

const usePickStyles = (playerPick, computerPick) => {
  // Player styles
  const image = `./images/icon-${playerPick}.svg`
  const alt = `${playerPick} icon`
  let bgColor = ''
  let outerShadow = ''

  // Computer styles
  const imageComputer = `./images/icon-${computerPick}.svg`
  const altComputer = `${computerPick} icon`
  let bgColorComputer = ''
  let outerShadowComputer = ''

  switch (playerPick) {
    case 'rock':
      bgColor = colors.rockGradient
      outerShadow = colors.outerRockShadow
      break
    case 'paper':
      bgColor = colors.paperGradient
      outerShadow = colors.outerPaperShadow
      break
    case 'scissors':
      bgColor = colors.scissorsGradient
      outerShadow = colors.outerScissorsShadow
      break
    case 'lizard':
      bgColor = colors.lizardGradient
      outerShadow = colors.outerLizardShadow
      break
    case 'spock':
      bgColor = colors.spockGradient
      outerShadow = colors.outerSpockShadow
      break
    default:
      break
  }

  switch (computerPick) {
    case 'rock':
      bgColorComputer = colors.rockGradient
      outerShadowComputer = colors.outerRockShadow
      break
    case 'paper':
      bgColorComputer = colors.paperGradient
      outerShadowComputer = colors.outerPaperShadow
      break
    case 'scissors':
      bgColorComputer = colors.scissorsGradient
      outerShadowComputer = colors.outerScissorsShadow
      break
    case 'lizard':
      bgColorComputer = colors.lizardGradient
      outerShadowComputer = colors.outerLizardShadow
      break
    case 'spock':
      bgColorComputer = colors.spockGradient
      outerShadowComputer = colors.outerSpockShadow
      break
    default:
      break
  }

  return {
    image,
    imageComputer,
    alt,
    altComputer,
    bgColor,
    bgColorComputer,
    outerShadow,
    outerShadowComputer,
  }
}

usePickStyles.propTypes = {
  playerPick: PropTypes.string,
  computerPick: PropTypes.string,
}

export default usePickStyles

import PropTypes from 'prop-types'

import { colors } from '../../colors'
import {
  HeaderContainer,
  HeaderLogo,
  HeaderScore,
  HeaderScoreText,
  HeaderScoreNumber,
} from './Header.styles'

const Header = ({ bonusLayout, score }) => {
  const image = bonusLayout ? './images/logo-bonus.svg' : './images/logo.svg'

  return (
    <HeaderContainer
      outline={colors.headerOutline}
      initial={{ opacity: 0, y: '-100vh' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        duration: 0.5,
      }}
    >
      <HeaderLogo src={image} alt="logo" bonusLayout={bonusLayout}></HeaderLogo>
      <HeaderScore>
        <HeaderScoreText color={colors.scoreText}>SCORE</HeaderScoreText>
        <HeaderScoreNumber color={colors.darkText}>{score}</HeaderScoreNumber>
      </HeaderScore>
    </HeaderContainer>
  )
}

Header.propTypes = {
  bonusLayout: PropTypes.bool,
  score: PropTypes.number,
}

export default Header

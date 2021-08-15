import PropTypes from 'prop-types'

import { colors } from '../../colors'
import {
  RulesModalOverlay,
  RulesModalContainer,
  RulesModalHeading,
  RulesModalCloseIcon,
} from './RulesModal.styles'

const RulesModal = ({ bonusLayout, setRulesModal }) => {
  const handleClick = () => {
    setRulesModal(false)
    document.body.style.overflowY = 'auto'
  }

  return (
    <>
      <RulesModalOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      ></RulesModalOverlay>
      <RulesModalContainer
        bonusLayout={bonusLayout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <RulesModalHeading color={colors.darkText}>RULES</RulesModalHeading>
        <RulesModalCloseIcon
          src="./images/icon-close.svg"
          alt="close icon"
          onClick={handleClick}
          whileHover={{ scale: 1.2 }}
        ></RulesModalCloseIcon>
      </RulesModalContainer>
    </>
  )
}

RulesModal.propTypes = {
  bonusLayout: PropTypes.bool,
  setRulesModal: PropTypes.func,
}

export default RulesModal

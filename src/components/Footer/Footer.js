import {
  FooterContainer,
  FooterButtonBonus,
  FooterButtonRules,
} from './Footer.styles'

const Footer = ({ bonusLayout, setBonusLayout, setRulesModal }) => {
  const handleClick = () => {
    window.scrollTo(0, 0)
    setRulesModal(true)
    document.body.style.overflowY = 'hidden'
  }

  return (
    <FooterContainer>
      <FooterButtonBonus
        onClick={() => setBonusLayout(!bonusLayout)}
        initial={{ opacity: 0, visibility: 'hidden', scale: 1 }}
        animate={{ opacity: 1, visibility: 'visible' }}
        transition={{ opacity: { delay: 0.7 }, visibility: { delay: 0.7 } }}
        whileHover={{ scale: 1.05 }}
      >
        {bonusLayout ? 'ORIGINAL' : 'BONUS'}
      </FooterButtonBonus>
      <FooterButtonRules
        onClick={handleClick}
        initial={{ opacity: 0, visibility: 'hidden', scale: 1 }}
        animate={{ opacity: 1, visibility: 'visible' }}
        transition={{ opacity: { delay: 0.7 }, visibility: { delay: 0.7 } }}
        whileHover={{ scale: 1.05 }}
      >
        RULES
      </FooterButtonRules>
    </FooterContainer>
  )
}

export default Footer

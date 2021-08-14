import styled from 'styled-components'
import { Button } from '../../GlobalStyles'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  // 550px
  @media screen and (min-width: 34.375em) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const FooterButtonBonus = styled(Button)`
  ${Button};

  // 1024px
  @media screen and (min-width: 64em) {
    position: fixed;
    left: 3rem;
    bottom: 3rem;
  }
`

export const FooterButtonRules = styled(Button)`
  ${Button};

  // 1024px
  @media screen and (min-width: 64em) {
    position: fixed;
    right: 3rem;
    bottom: 3rem;
  }
`

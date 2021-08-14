import styled from 'styled-components'
import { Container } from '../../GlobalStyles'

export const HeaderContainer = styled(Container)`
  ${Container};

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10rem;
  padding: 1rem 1rem 1rem 2rem;
  border-radius: 0.75rem;
  border: ${({ outline }) => `3px solid ${outline}`};

  // 550px
  @media screen and (min-width: 34.375em) {
    height: 15rem;
    padding: 1.7rem 1.7rem 1.7rem 3.2rem;
    border-radius: 1.5rem;
  }
`

export const HeaderLogo = styled.img`
  cursor: pointer;
  width: ${({ bonusLayout }) => (bonusLayout ? '5.5' : '8.2')}rem;
  height: ${({ bonusLayout }) => (bonusLayout ? '5.5' : '4.8')}rem;

  // 550px
  @media screen and (min-width: 34.375em) {
    width: ${({ bonusLayout }) => (bonusLayout ? '11' : '15.5')}rem;
    height: ${({ bonusLayout }) => (bonusLayout ? '11' : '9.3')}rem;
  }
`

export const HeaderScore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.3rem 2.5rem;
  background-color: #fff;
  border-radius: 0.5rem;

  // 550px
  @media screen and (min-width: 34.375em) {
    padding: 2rem 5rem;
  }
`

export const HeaderScoreText = styled.span`
  color: ${({ color }) => color};
  letter-spacing: 2px;
  font-size: 1rem;

  // 550px
  @media screen and (min-width: 34.375em) {
    font-size: 1.4rem;
  }
`

export const HeaderScoreNumber = styled.span`
  color: ${({ color }) => color};
  font-size: 3.5rem;
  line-height: 1.1;

  // 550px
  @media screen and (min-width: 34.375em) {
    font-size: 5.2rem;
  }
`

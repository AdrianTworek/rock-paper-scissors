import styled from 'styled-components'
import { Container } from '../../GlobalStyles'

export const BoardContainer = styled(Container)`
  ${Container};

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;
  max-width: 32rem;
  margin-top: ${({ bonusLayout }) => (bonusLayout ? '1' : '8')}rem;
  margin-bottom: auto;
  background: ${({ bonusLayout }) =>
    bonusLayout
      ? `url('./images/bg-pentagon.svg')`
      : `url('./images/bg-triangle.svg')`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: ${({ bonusLayout }) =>
    bonusLayout ? '22rem 22rem' : '20rem 20rem'};

  // 550px
  @media screen and (min-width: 34.375em) {
    margin-top: ${({ bonusLayout }) => (bonusLayout ? '0' : '8')}rem;
    max-width: 48rem;
    gap: 8rem;
    background-size: ${({ bonusLayout }) =>
      bonusLayout ? '32rem 32rem' : '30rem 30rem'};
  }

  // Rock (mobile)
  div:last-child {
    transform: translateY(-3rem);

    // 550px
    @media screen and (min-width: 34.375em) {
      transform: translateY(-4rem);
    }
  }

  // Paper
  div:nth-child(1) {
    transform: ${({ bonusLayout }) => bonusLayout && 'translate(19rem, 12rem)'};

    // 350px
    @media screen and (max-width: 21.875em) {
      transform: ${({ bonusLayout }) =>
        bonusLayout && 'translate(17rem, 10.5rem)'};
    }

    // 550px
    @media screen and (min-width: 34.375em) {
      transform: ${({ bonusLayout }) =>
        bonusLayout && 'translate(27rem, 20rem)'};
    }
  }

  // Scissors
  div:nth-child(2) {
    transform: ${({ bonusLayout }) =>
      bonusLayout && 'translate(-7.5rem, 4rem)'};

    // 350px
    @media screen and (max-width: 21.875em) {
      transform: ${({ bonusLayout }) =>
        bonusLayout && 'translate(-6.5rem, 3rem)'};
    }

    // 550px
    @media screen and (min-width: 34.375em) {
      transform: ${({ bonusLayout }) =>
        bonusLayout && 'translate(-11rem, 6rem)'};
    }
  }

  // Rock
  div:nth-child(3) {
    transform: ${({ bonusLayout }) => bonusLayout && 'translate(15rem, 11rem)'};

    // 350px
    @media screen and (max-width: 21.875em) {
      transform: ${({ bonusLayout }) =>
        bonusLayout && 'translate(13rem, 9.3rem)'};
    }

    // 550px
    @media screen and (min-width: 34.375em) {
      transform: ${({ bonusLayout }) =>
        bonusLayout && 'translate(21rem, 16rem)'};
    }
  }

  // Spock
  div:nth-child(4) {
    transform: ${({ bonusLayout }) =>
      bonusLayout && 'translate(-19rem, -3rem)'};

    // 350px
    @media screen and (max-width: 21.875em) {
      transform: ${({ bonusLayout }) =>
        bonusLayout && 'translate(-17rem, -3rem)'};
    }

    // 550px
    @media screen and (min-width: 34.375em) {
      transform: ${({ bonusLayout }) =>
        bonusLayout && 'translate(-27rem, -3rem)'};
    }
  }

  // Lizard
  div:nth-child(5) {
    transform: ${({ bonusLayout }) => bonusLayout && 'translate(-7rem, -4rem)'};

    // 550px
    @media screen and (min-width: 34.375em) {
      transform: ${({ bonusLayout }) =>
        bonusLayout && 'translate(-10rem, -7rem)'};
    }
  }
`

export const BoardButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ bonusLayout }) => (bonusLayout ? '10' : '12')}rem;
  height: ${({ bonusLayout }) => (bonusLayout ? '10' : '12')}rem;
  border-radius: 50%;
  background: ${({ bgColor }) => bgColor};
  box-shadow: ${({ outerShadow }) => outerShadow};
  cursor: pointer;

  // 350px
  @media screen and (max-width: 21.875em) {
    width: ${({ bonusLayout }) => (bonusLayout ? '8' : '10')}rem;
    height: ${({ bonusLayout }) => (bonusLayout ? '8' : '10')}rem;
  }

  // 550px
  @media screen and (min-width: 34.375em) {
    width: ${({ bonusLayout }) => (bonusLayout ? '15' : '20')}rem;
    height: ${({ bonusLayout }) => (bonusLayout ? '15' : '20')}rem;
  }

  &::before {
    content: '';
    position: absolute;
    width: ${({ bonusLayout }) => (bonusLayout ? '8' : '9')}rem;
    height: ${({ bonusLayout }) => (bonusLayout ? '8' : '9')}rem;
    border-radius: 50%;
    background-color: ${({ innerBg }) => innerBg};
    z-index: 1;
    box-shadow: ${({ innerShadow }) => innerShadow};

    // 350px
    @media screen and (max-width: 21.875em) {
      width: ${({ bonusLayout }) => (bonusLayout ? '6.5' : '8')}rem;
      height: ${({ bonusLayout }) => (bonusLayout ? '6.5' : '8')}rem;
    }

    // 550px
    @media screen and (min-width: 34.375em) {
      width: ${({ bonusLayout }) => (bonusLayout ? '12' : '16')}rem;
      height: ${({ bonusLayout }) => (bonusLayout ? '12' : '16')}rem;
    }
  }
`

export const BoardButtonImage = styled.img`
  z-index: 2;
  transform: ${({ bonusLayout }) =>
    bonusLayout ? 'scale(0.8)' : 'scale(0.95)'};

  // 350px
  @media screen and (max-width: 21.875em) {
    transform: scale(0.75);
  }

  // 550px
  @media screen and (min-width: 34.375em) {
    transform: scale(1.3);
  }
`

import styled from 'styled-components'
import { motion } from 'framer-motion'

export const RulesModalContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 3rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ bonusLayout }) =>
    bonusLayout
      ? `url('./images/image-rules-bonus.svg') no-repeat center center, #fff`
      : `url('./images/image-rules.svg') no-repeat center center, #fff`};
  z-index: 99999;

  // 350px {
  @media screen and (max-width: 21.875em) {
    background-size: 27rem 27rem;
  }

  // 768px {
  @media screen and (min-width: 48em) {
    top: 45%;
    left: 50%;
    transform: translate(-50%, -45%);
    width: 42rem;
    height: 46rem;
    padding: 4rem;
    border-radius: 1rem;
    flex-direction: row;
    align-items: flex-start;
    background-position: 50% 75%;
  }
`

export const RulesModalOverlay = styled(motion.div)`
  // 768px
  @media screen and (min-width: 48em) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 9999;
  }
`

export const RulesModalHeading = styled.h2`
  color: ${({ color }) => color};
  font-size: 3.3rem;
`

export const RulesModalCloseIcon = styled(motion.img)`
  cursor: pointer;
`

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Button } from '../../GlobalStyles'

export const ResultContainer = styled(motion.div)`
  max-width: 23rem;

  // 768px
  @media screen and (min-width: 48em) {
    order: 2;
  }
`

export const ResultText = styled.span`
  color: #fff;
  font-size: 5.3rem;
  letter-spacing: 2px;
`

export const ResultPlayAgainButton = styled(Button)`
  ${Button};

  padding: 1.6rem 6rem;
  margin-top: 1.5rem;
  font-weight: 700;
  font-size: 1.5rem;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border: none;
  transition: all 200ms ease-in-out;

  &:hover {
    transform: scale(1.05);
    color: royalblue;
  }
`

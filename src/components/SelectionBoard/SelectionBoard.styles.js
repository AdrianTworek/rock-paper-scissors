import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import { BoardButton, BoardButtonImage } from '../GameBoard/GameBoard.styles'
import { css } from 'styled-components'

const winAnimation = keyframes`
  to {
    transform:  scale(1.05) translateY(-0.5rem);
    box-shadow: 0 0 1rem 0.5rem rgba(255, 255, 255, 0.3);
  }
`

export const SelectionBoardContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 32rem;
  margin: 6rem auto;
  margin-bottom: auto;
  gap: 6rem;

  // 550px
  @media screen and (min-width: 34.375em) {
    max-width: 46rem;
  }

  // 768px
  @media screen and (min-width: 48em) {
    max-width: 100rem;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    gap: 4rem;
  }

  // 1024px
  @media screen and (min-width: 64em) {
    gap: 8rem;
  }
`

export const SelectionBoardPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  // 550px
  @media screen and (min-width: 34.375rem) {
    gap: 4rem;
  }

  // 768px
  @media screen and (min-width: 48em) {
    order: 1;
  }
`

export const SelectionBoardPick = styled(BoardButton)`
  ${BoardButton};

  animation: ${({ result }) =>
    result === 'win'
      ? css`
          ${winAnimation} 300ms ease-out 500ms infinite alternate
        `
      : 'none'};
  animation: ${({ result }) => result === 'draw' && 'none'};

  // 550px
  @media screen and (min-width: 34.375rem) {
    order: 2;
  }
`

export const SelectionBoardImage = styled(BoardButtonImage)``

export const SelectionBoardText = styled.span`
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 2px;

  // 550px
  @media screen and (min-width: 34.375rem) {
    order: 1;
    font-size: 2rem;
  }
`

export const SelectionBoardAI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  // 550px
  @media screen and (min-width: 34.375rem) {
    gap: 4rem;
  }

  // 768px
  @media screen and (min-width: 48em) {
    order: 3;
  }
`

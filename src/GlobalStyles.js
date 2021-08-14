import styled, { createGlobalStyle } from 'styled-components'
import { motion } from 'framer-motion'

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Barlow Semi Condensed', 'Helvetica',sans-serif;
    font-weight: 700;
    min-height: 100vh;
    min-width: 32rem;
    background-image: ${({ bg }) => bg};
    background-size: cover;
    color: ${({ color }) => color};
    text-align: center;
    padding: 3rem;
    overflow-x: hidden;

    // 360px 
    @media screen and (max-width: 22.5em) {
      padding: 2rem;
    }

    // 550px
    @media screen and (min-width: 34.375em) {
    padding: 4.5rem 3rem 3rem 3rem;
    }
  }

  #root {
    min-height: calc(100vh - 8.5rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    // 550px
    @media screen and (min-width: 34.375em) {
      min-height: calc(100vh - 7.5rem);
    }
  }

  img {
    max-width: 100%;
  }
`

export const Container = styled(motion.div)`
  max-width: 70rem;
  margin: 0 auto;
`

export const Button = styled(motion.button)`
  cursor: pointer;
  border: none;
  border: 2px solid hsl(217, 16%, 45%);
  border-radius: 1rem;
  padding: 1.2rem 4rem;
  background-color: transparent;
  color: #fff;
  font-family: inherit;
  font-size: 1.4rem;
  letter-spacing: 3px;
`

export default GlobalStyles

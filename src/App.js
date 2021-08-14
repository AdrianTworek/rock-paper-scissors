import { useState } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import {
  Header,
  GameBoard,
  SelectionBoard,
  Footer,
  RulesModal,
} from './components'

import GlobalStyles from './GlobalStyles'
import { colors } from './colors'

const App = () => {
  const location = useLocation()
  const [score, setScore] = useState(0)
  const [rulesModal, setRulesModal] = useState(false)
  const [bonusLayout, setBonusLayout] = useState(false)
  const [playerPick, setPlayerPick] = useState('')
  const [computerPick, setComputerPick] = useState('')

  // App level global functions
  const handleComputerPick = () => {
    const picks = bonusLayout
      ? ['rock', 'paper', 'scissors', 'lizard', 'spock']
      : ['rock', 'paper', 'scissors']

    setComputerPick(picks[Math.floor(Math.random() * picks.length)])
  }

  const getResult = (playerPick, computerPick) => {
    if (playerPick === computerPick) {
      return 'draw'
    }

    const moves = {
      rock: {
        beats: ['scissors', 'lizard'],
      },
      paper: {
        beats: ['rock', 'spock'],
      },
      scissors: {
        beats: ['paper', 'lizard'],
      },
      lizard: {
        beats: ['spock', 'paper'],
      },
      spock: {
        beats: ['scissors', 'rock'],
      },
    }

    if (moves[playerPick].beats.includes(computerPick)) {
      return 'win'
    } else {
      return 'lose'
    }
  }

  return (
    <>
      <GlobalStyles bg={colors.bgGradient} color={colors.fontColor} />
      <Header bonusLayout={bonusLayout} score={score} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <GameBoard
              bonusLayout={bonusLayout}
              setPlayerPick={setPlayerPick}
              handleComputerPick={handleComputerPick}
            />
          </Route>
          <Route exact path="/selection">
            <SelectionBoard
              playerPick={playerPick}
              computerPick={computerPick}
              getResult={getResult}
              score={score}
              setScore={setScore}
            />
          </Route>
          {/* 404 page */}
          <Route
            path="/"
            render={() => (
              <h1 style={{ margin: '5rem auto auto' }}>Page not found</h1>
            )}
          ></Route>
        </Switch>
      </AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Footer
            bonusLayout={bonusLayout}
            setBonusLayout={setBonusLayout}
            setRulesModal={setRulesModal}
          />
          {rulesModal && (
            <RulesModal
              bonusLayout={bonusLayout}
              setRulesModal={setRulesModal}
            />
          )}
        </Route>
      </Switch>
    </>
  )
}

export default App

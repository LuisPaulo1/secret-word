import './App.css';

import { useState } from 'react';

import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';
import { wordsList } from './data/words';

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' },
]
function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words, setWords] = useState(wordsList);

  const handleStartGame = () => {
    setGameStage(stages[1].name);
  }

  const handleVerifyLetter = () => {
    setGameStage(stages[2].name);
  }

  const handleRetry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      { gameStage === 'start' && <StartScreen startGame={handleStartGame} /> }
      { gameStage === 'game' && <Game verifyLetter={handleVerifyLetter} /> }
      { gameStage === 'end' && <GameOver retry={handleRetry} /> }
    </div>
  );
}

export default App;
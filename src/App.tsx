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
  const [words, setWords] = useState<{ [key: string]: string[] }>(wordsList);
  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState<string[]>([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    return [category, word];
  }

  const handleStartGame = () => {
    const [category, word] = pickWordAndCategory();
    setPickedWord(word);
    setPickedCategory(category);    
    setLetters(word.toLowerCase().split(''));
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
      { gameStage === 'game' && 
        <Game 
          verifyLetter={handleVerifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        /> 
      }
      { gameStage === 'end' && <GameOver retry={handleRetry} /> }
    </div>
  );
}

export default App;
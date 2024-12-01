import './Game.css';

type GameProps = {
  verifyLetter: () => void;
  pickedWord: string;
  pickedCategory: string;
  letters: string[];
  guessedLetters: string[];
  wrongLetters: string[];
  guesses: number;
  score: number;
}
function Game(
  {
    verifyLetter,
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score
  }: GameProps) {
  return (
    <div className='game'>
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>
      <div className="wordContainer">
        {letters.map((letter, index) => {
          if (guessedLetters.includes(letter)) {
            return <span className="letter" key={index}>{letter}</span>
          }
          return <span className="blankSquare" key={index}></span>
        })}
      </div>
      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra</p>
        <form>
          <input type="text" name="letter" maxLength={1} required />
          <button onClick={verifyLetter} >Jogar!</button>
        </form>
      </div>
      <div className="letterContainer">
        <p>Letras já utilizadas</p>
        {wrongLetters.map((letter, index) => {
          return <span key={index}>{letter},</span>
        })}
      </div>
    </div>
  )
}

export default Game

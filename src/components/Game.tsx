import './Game.css';

type GameProps = {
  verifyLetter: () => void;
}
function Game({ verifyLetter }: GameProps) {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={ verifyLetter }>
        Finalizar jogo
      </button>
    </div>
  )
}

export default Game

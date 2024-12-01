import './GameOver.css';

type GameOverProps = {
  retry: () => void;
}
function GameOver({ retry }: GameOverProps) {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={ retry }>
        Resetar jogo
      </button>
    </div>
  )
}

export default GameOver

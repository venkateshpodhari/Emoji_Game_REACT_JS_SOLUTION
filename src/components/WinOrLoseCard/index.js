// Write your code here.

import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="result-card-container">
      <div className="details-section">
        <h1 className="heading"> {gameStatus}</h1>
        <p className="score-heading">{scoreLabel}</p>
        <p className="score-label">{score}/12</p>
        <button type="button" onClick={onClickPlayAgain} className="button">
          {' '}
          Play Again
        </button>{' '}
      </div>
      <img src={imageUrl} alt="win or lose" className="img" />
    </div>
  )
}

export default WinOrLoseCard

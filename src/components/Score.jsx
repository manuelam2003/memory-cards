function Score({ currentScore, bestScore }) {
  return (
    <div className="score-container">
      <h3>Current Score: {currentScore}</h3>
      <h3>Highest Score: {bestScore}</h3>
    </div>
  );
}

export default Score;

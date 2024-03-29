import { Fragment } from 'react';
import { useQuiz } from '../contexts/QuizContext';

function FinishScreen() {
  const { points, highScore, dispatch, totalPoints } = useQuiz();
  console.log(points, totalPoints, highScore);
  const percentage = (points / totalPoints) * 100;
  let emoji;
  if (percentage === 100) {
    emoji = '🥇';
  } else if (percentage > 80) {
    emoji = '😄';
  } else if (percentage > 60) {
    emoji = '😊';
  } else if (percentage > 40) {
    emoji = '😐';
  } else {
    emoji = '😞';
  }
  return (
    <Fragment>
      <p className='result'>
        {emoji} You scored <strong>{points}</strong> out of {totalPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className='highscore'>(Highscore: {highScore} points)</p>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart
      </button>
    </Fragment>
  );
}
export default FinishScreen;

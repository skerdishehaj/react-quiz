import { useQuiz } from '../contexts/QuizContext';

function Options({ question }) {
  const { answer, dispatch } = useQuiz();
  const hasAnswerd = answer !== null;
  return (
    <div className='options'>
      {question.options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option ${answer === index ? 'answer' : ''} ${
            hasAnswerd
              ? index === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          }`}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          disabled={hasAnswerd}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;

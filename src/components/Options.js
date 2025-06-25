const Options = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;

  return (
    <div>
      <div className="options">
        {question.options.map((option, index) => {
          return (
            <button
              key={option}
              className={`btn btn-option ${index === answer ? "answer" : ""} ${
                hasAnswered
                  ? index === question.correctOption
                    ? "correct"
                    : "wrong"
                  : ""
              }`}
              onClick={() => dispatch({ type: "newAnswer", payload: index })}
              disabled={hasAnswered}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Options;

import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");
  const isDisabled = Number(score) < 5 && comment.length <= 10;
  const textAreaPlaceholder = isDisabled
    ? "Please Provide Feedback"
    : "Optional Feedback";
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ score, comment });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback Form</h2>
          <div>
            <label htmlFor="score">Score: {score} ⭐</label>
            <input
              type="range"
              name="score"
              id="score"
              value={score}
              min="0"
              max="10"
              onChange={(e) => {
                setScore(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="comment">Comments: </label>
            <textarea
              name="comment"
              value={comment}
              placeholder={textAreaPlaceholder}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
        </fieldset>
        <button disabled={isDisabled}>Submit</button>
      </form>
    </div>
  );
};

export default Form;

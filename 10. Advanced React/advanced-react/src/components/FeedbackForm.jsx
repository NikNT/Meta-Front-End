import React, { useState } from "react";

export const FeedbackForm = () => {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please provide a comment explaining what went wrong!");
      return;
    }
    console.log("Form Submitted");
    setComment("");
    setScore("10");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback Form</h2>
          <label htmlFor="score">Score: {score} 🌟 </label>
          <input
            type="range"
            min="0"
            max="10"
            name="score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
          <div>
            <label htmlFor="feedback">Feedback</label>
            <textarea
              name="feedback"
              cols="30"
              rows="10"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export const GuessNumber = () => {
  const handleClick = () => {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("Enter a Number: ");
    alert(`You entered ${userInput} | Computed Number ${randomNum}`);
  };

  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Guess the number between 1 and 3</button>
    </div>
  );
};

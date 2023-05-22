export const Week = () => {
  const time = new Date();
  const day = time.toLocaleString("en-us", { weekday: "long" });
  const morning = time.getHours() >= 6 && time.getHours() <= 12;
  let dayMessage;
  let today = day.toLowerCase();
  console.log(morning);
  if (today === "monday") {
    dayMessage = `Happy ${day}`;
  } else if (today === "tuesday") {
    dayMessage = `Happy ${day}! Only Four Days to Go!`;
  } else if (today === "wednesday") {
    dayMessage = `Happy ${day}! Only Three Days to Go!`;
  } else if (today === "thursday") {
    dayMessage = `Happy ${day}! Almost There!`;
  } else if (today === "friday") {
    dayMessage = `Happy ${day}! You got it!`;
  } else if (today === "saturday") {
    dayMessage = `Happy ${day}! Run Errands!`;
  } else {
    dayMessage = `Happy ${day}! Chill Today`;
  }
  return (
    <>
      <h1>{dayMessage}</h1>
      {morning && <h2>Done With Breakfast?</h2>}
    </>
  );
};

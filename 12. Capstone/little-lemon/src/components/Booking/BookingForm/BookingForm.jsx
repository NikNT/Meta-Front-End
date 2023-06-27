import React, { useState } from "react";
import styles from "./BookingForm.module.css";

const BookingForm = ({ availableTimes, handleDateChange }) => {
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");
  const [selectedDate, setSelectedDate] = useState(""); // Define selectedDate state

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleGuestChange = (e) => {
    setGuests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Date: ${selectedDate} | Time : ${time} | Guests : ${guests} | Occasion: ${occasion}`
    );
  };

  return (
    <div>
      <form>
        <label htmlFor="res-date">Choose Date</label>
        <input
          type="date"
          name="res-date"
          id="res-date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <label htmlFor="res-time">Choose Time</label>
        <select
          name="res-time"
          id="res-time"
          value={time}
          onChange={handleTimeChange}
        >
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min={1}
          max={10}
          name="guests"
          id="guests"
          value={guests}
          onChange={handleGuestChange}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          name="occasion"
          id="occasion"
          value={occasion}
          onChange={handleOccasionChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input
          type="submit"
          value="Make Your Reservation"
          className={styles.submitInput}
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default BookingForm;

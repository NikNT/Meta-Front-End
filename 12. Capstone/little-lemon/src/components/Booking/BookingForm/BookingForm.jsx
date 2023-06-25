import React, { useState } from "react";
import styles from "./BookingForm.module.css";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState("1");
  const [ocassion, setOcassion] = useState("Birthday");

  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };
  const handleGuestChange = (e) => {
    setGuests(e.target.value);
  };

  const handleOcassionChange = (e) => {
    setOcassion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Date: ${date} | Time : ${time} | Guests : ${guests} | Ocassion: ${ocassion}`
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
          value={date}
          onChange={handleDateChange}
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
        <label htmlFor="ocassion">Occasion</label>
        <select
          name="ocassion"
          id="ocassion"
          value={ocassion}
          onChange={handleOcassionChange}
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

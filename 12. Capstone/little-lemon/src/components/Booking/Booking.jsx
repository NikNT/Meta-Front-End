import React from "react";
import styles from "./Booking.module.css";

const Booking = () => {
  return (
    <div>
      <form>
        <label htmlFor="res-date">Choose Date</label>
        <input type="date" name="res-date" id="res-date" />
        <label htmlFor="res-time">Choose Time</label>
        <select name="res-time" id="res-time">
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min={1}
          max={10}
          name="guests"
          id="guests"
        />
        <label htmlFor="ocassion">Occasion</label>
        <select name="ocassion" id="ocassion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your Reservation" />
      </form>
    </div>
  );
};

export default Booking;

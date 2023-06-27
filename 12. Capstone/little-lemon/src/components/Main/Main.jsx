import React, { useState, useEffect } from "react";
import BookingForm from "../Booking/BookingForm/BookingForm";
import { fetchAPI } from "../../api";

const Main = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ]);

  useEffect(() => {
    const today = new Date();
    // const dateString = formatDate(today);
    fetchAPI(today)
      .then((times) => {
        setAvailableTimes(times);
      })
      .catch((error) => {
        console.error("Error fetching available times:", error);
      });
  }, []);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    // Update availableTimes based on the selected date
    // You can implement your logic here to fetch the appropriate times
    // For simplicity, let's assume it returns the same available times for any date
    // setAvailableTimes([
    //   "17:00",
    //   "18:00",
    //   "19:00",
    //   "20:00",
    //   "21:00",
    //   "22:00",
    //   "23:00",
    // ]);
  };

  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        handleDateChange={handleDateChange}
        selectedDate={selectedDate}
      />
    </>
  );
};

export default Main;

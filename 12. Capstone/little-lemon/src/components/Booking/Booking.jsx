import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import BookingForm from "./BookingForm/BookingForm";
import styles from "./Booking.module.css";

const Booking = () => {
  return (
    <>
      <Nav />
      <div className={styles.formContainer}>
        <h1 className={styles.reserveHeading}>Reserve a Table</h1>
        <BookingForm />
      </div>
      <Footer />
    </>
  );
};

export default Booking;

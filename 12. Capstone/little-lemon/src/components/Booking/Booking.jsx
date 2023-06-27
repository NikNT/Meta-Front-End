import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import BookingForm from "./BookingForm/BookingForm";
import styles from "./Booking.module.css";
import Main from "../Main/Main";

const Booking = () => {
  return (
    <>
      <Nav />
      <div className={styles.formContainer}>
        <h1 className={styles.reserveHeading}>Reserve a Table</h1>
        <Main />
      </div>
      <Footer />
    </>
  );
};

export default Booking;

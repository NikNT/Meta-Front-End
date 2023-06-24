import React from "react";
import styles from "./Footer.module.css";
import footerLogo from "./footerLogo.jpg";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerImgContainer}>
          <img className={styles.footerImg} src={footerLogo} alt="FooterLogo" />
        </div>
        <div className={styles.footerNav}>
          <p className={styles.footerHead}>Navigation</p>
          <p>Home</p>
          <p>About</p>
          <p>Menu</p>
          <p>Reservations</p>
          <p>Order</p>
          <p>Login</p>
        </div>
        <div className={styles.footerContact}>
          <p className={styles.footerHead}>Contact</p>
          <p>2395 Maldove Way,</p>
          <p>Chicago, IL</p>
          <p>(629) 243-6827</p>
          <p>support@littlelemon.com</p>
        </div>
        <div className={styles.footerConnnect}>
          <p className={styles.footerHead}>Connect</p>
          <p>Facebook</p>
          <p>Instgram</p>
          <p>Join Us!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import styles from "./App.module.css";
import Nav from "./components/Nav/Nav";
import CallToAction from "./components/CallToAction/CallToAction";
import Specials from "./components/Specials/Specials";
import Testimonials from "./components/Testimonials/Testimonials";
import Chicago from "./components/Chicago/Chicago";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className={styles.container}>
        <Nav />
        <CallToAction />
        <Specials />
        {/* <Testimonials />
        <Chicago />
        <Footer /> */}
      </div>
    </>
  );
}

export default App;

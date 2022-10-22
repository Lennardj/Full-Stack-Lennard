import { Link } from "react-router-dom";
import styles from "../Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      This is the About home <br />
      <button className={styles.link}>
        <Link to="/about">About </Link>
      </button>
      <button className={styles.link}>
        {" "}
        <Link to="/contact">Contact </Link>
      </button>
      <button className={styles.link}>
        <Link to="/login">Login </Link>
      </button>
      <button className={styles.link}>
        <Link to="/signup">Signup </Link>
      </button>
    </div>
  );
}

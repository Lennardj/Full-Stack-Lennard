import { Link } from "react-router-dom";
import styles from "../Home.module.css";
export default function Signup() {
  return (
    <div>
      This is the About signup
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

import { Link } from "react-router-dom";
import styles from "./header.module.scss";

export const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <img src="/images/k-logo.png" alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo">Homework: TodoList</Link>
          </li>
          <li>
            <a href="https://github.com/bluetch/frontend-course" target="_blank" rel="noreferrer">GitHub</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
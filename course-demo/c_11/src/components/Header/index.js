import { Link } from "react-router-dom";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
      <img src="https://www.apple.com/ac/globalnav/7/zh_TW/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg" alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="https://github.com/bluetch/frontend-course" target="_blank">GitHub</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
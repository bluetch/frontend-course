import { useState, useEffect } from 'react';
import { Button, Layout } from '../../components';
import styles from './register.module.scss';

export const Register = () => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordAgainError, setpasswordAgainError] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    let name = document.querySelector("#name").value;
    const nameRegex = /\w/g;
    if (nameRegex.test(name)) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  }

  useEffect(() => {
    document.title = "Homework";
  }, []);

  return (
    <Layout className={styles.register}>
      <div className="container">
        <form action="" className={styles.form}>
          <h1>Create Account</h1>
          <label htmlFor="name">
            <span>Full Name</span>
            <input type="text" id="name" />
            {nameError && <div className={styles.error}>格式錯誤，請使用英數字</div>}
          </label>

          <label htmlFor="email">
            <span>Email</span>
            <input type="text" id="email" />
            {emailError && <div className={styles.error}>錯誤</div>}
          </label>

          <label htmlFor="mobile">
            <span>Mobile Number</span>
            <input type="text" id="mobile" />
            {mobileError && <div className={styles.error}>錯誤</div>}
          </label>

          <label htmlFor="password">
            <span>Password</span>
            <input type="password" id="password" />
            {passwordError && <div className={styles.error}>錯誤</div>}
          </label>

          <label htmlFor="passwordAgain">
            <span>Confirm Password</span>
            <input type="password" id="passwordAgain" />
            {passwordAgainError && <div className={styles.error}>錯誤</div>}
          </label>

          <Button onClick={handleRegister}>Register</Button>
        </form>
      </div>
    </Layout>
  )
}
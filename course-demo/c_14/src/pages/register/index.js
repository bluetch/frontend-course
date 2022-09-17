import { useState, useEffect, useRef } from 'react';
import { Button, Layout } from '../../components';
import styles from './register.module.scss';

export const Register = () => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordAgainError, setpasswordAgainError] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const passwordRef = useRef();
  const passwordAgainRef = useRef();

  const handleRegister = (e) => {
    e.preventDefault();
    const nameRegex = /\w/g;
    const emailRegex = /[a-z0-9]@[a-z]+\.[a-z]{2,3}/g;
    const mobileRegex = /\d{10}/g;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;

    // 判斷 full name是否符合格式
    if (nameRegex.test(nameRef.current.value)) {
      setNameError(false);
    } else {
      setNameError(true);
    }

    // 判斷 email是否符合格式
    if (emailRegex.test(emailRef.current.value)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }

    // 判斷手機號碼是否符合格式
    if (mobileRegex.test(mobileRef.current.value)) {
      setMobileError(false);
    } else {
      setMobileError(true);
    }

    // 判斷密碼格式是否夠安全
    if (passwordRegex.test(passwordRef.current.value)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }

    // 判斷密碼內容是否一樣
    if (passwordRef.current.value === passwordAgainRef.current.value) {
      setpasswordAgainError(false);
    } else {
      setpasswordAgainError(true);
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
            <input type="text" id="name" ref={nameRef} onBlur={() => console.log('blur')}/>
            {nameError && <div className={styles.error}>格式錯誤，請使用英數字</div>}
          </label>

          <label htmlFor="email">
            <span>Email</span>
            <input type="text" id="email" ref={emailRef}/>
            {emailError && <div className={styles.error}>Email格式錯誤</div>}
          </label>

          <label htmlFor="mobile">
            <span>Mobile Number</span>
            <input type="text" id="mobile" ref={mobileRef}/>
            {mobileError && <div className={styles.error}>手機號碼格式錯誤，請輸入純數字</div>}
          </label>

          <label htmlFor="password">
            <span>Password</span>
            <input type="password" id="password" ref={passwordRef}/>
            {passwordError && <div className={styles.error}>請輸入最少8字元，包含一個以上英文及數字</div>}
          </label>

          <label htmlFor="passwordAgain">
            <span>Confirm Password</span>
            <input type="password" id="passwordAgain" ref={passwordAgainRef}/>
            {passwordAgainError && <div className={styles.error}>必須與上面輸入的密碼一致</div>}
          </label>

          <Button onClick={handleRegister}>Register</Button>
        </form>
      </div>
    </Layout>
  )
}
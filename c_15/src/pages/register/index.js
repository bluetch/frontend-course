import { useState, useEffect, useRef } from 'react';
import { Button, Layout } from '../../components';
import styles from './register.module.scss';

export const Register = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const passwordRef = useRef();
  const passwordAgainRef = useRef();

  const nameRegex = /\w/;
  const emailRegex = /[A-Za-z0-9]*@[a-z]+\.[a-z]{2,3}$/;
  const mobileRegex = /^09[0-9]{8}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [mobileError, setMobileError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [passwordAgainError, setPasswordAgainError] = useState(null);

  const handleRegister = (event) => {
    event.preventDefault();

    if(nameRegex.test(nameRef.current.value)){
      setNameError(false);
    }else{
      setNameError(true);
    }

    if(emailRegex.test(emailRef.current.value)){
      setEmailError(false);
    }else{
      setEmailError(true);
    }

    if(mobileRegex.test(mobileRef.current.value)){
      setMobileError(false);
    }else{
      setMobileError(true);
    }

    if(passwordRegex.test(passwordRef.current.value)){
      setPasswordError(false);
    }else{
      setPasswordError(true);
    }

    if(passwordRef.current.value === passwordAgainRef.current.value && passwordAgainRef.current.value !==""){
      setPasswordAgainError(false);
    }else{
      setPasswordAgainError(true);
    }

    if(nameError || emailError || mobileError || passwordError || passwordAgainError){
      return false;
    }
    
    if(nameError === false && emailError === false && mobileError === false && passwordError === false && passwordAgainError === false){
      // all false
      console.log()
      window.location.href="/";
    }

    
  }

  useEffect(() => {
    // function
  }, []);

  return (
    <Layout className={styles.register}>
      <div className="container">
        <form action="" className={styles.form}>
          <h1>Create Account</h1>
          <label htmlFor="name">
            <span>Full name</span>
            <input type="text" id="name" ref={nameRef} placeholder="請輸入你的英文名字" />
            {nameError && (<div className={styles.error}>名字格式錯誤，請使用英文文字</div>)}
          </label>
          <label htmlFor="email">
            <span>Email</span>
            <input type="text" id="email" ref={emailRef} placeholder="e.g yourname@gmail.com"/>
            {emailError && (<div className={styles.error}>Email格式錯誤</div>)}
          </label>
          <label htmlFor="mobile">
            <span>mobile Number</span>
            <input type="text" id="mobile" ref={mobileRef} />
            {mobileError && (<div className={styles.error}>手機格式錯誤，請使用純數字</div>)}
          </label>
          <label htmlFor="password">
            <span>password</span>
            <input type="password" id="password" ref={passwordRef} />
            {passwordError && (<div className={styles.error}>密碼格式錯誤，請最少輸入8碼，包括至少一個英文和數字</div>)}
          </label>
          <label htmlFor="passwordAgain">
            <span>confirm password</span>
            <input type="password" id="passwordAgain" ref={passwordAgainRef} />
            {passwordAgainError && (<div className={styles.error}>必須與上面輸入的密碼一致</div>)}
          </label>
          <Button onClick={handleRegister}>Register</Button>
        </form>
      </div>
    </Layout>
  )
}
import React, { useState } from "react";
import { useStores } from "../../hooks/index";
import User from "../../models/User";
import { useHistory } from "react-router-dom";
import style from "./login.module.css"

const Login = () => {
  const { uiStore, userStore } = useStores();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");

  const handleGoogleLogin = async e => {
    e.preventDefault();
      const result = await uiStore.signInWithPopUp();
      console.log(result);
    };


    const handleSubmit = async e => {
      setPasswordError("");
      setFormError("");
      setEmailError("");
      if(password === ""){
        setPasswordError("Gelieve een wachtwoord in te vullen");
      }
      if(email === ""){
        setEmailError("Gelieve een wachtwoord in te vullen");
      }
      e.preventDefault();
      const user = new User({
        name:"",
        store: userStore,
        email: email,
        password: password
      });
     const result = await uiStore.signInWithEmailAndPassword(user);
     if(result === "auth/user-not-found" || result === "auth/invalid"){
       setFormError("De inloggegevens zijn onjuist");
     }
     if(uiStore.currentUser && !uiStore.currentBooking){
       setFormError("Gelieve een boeking te doen voor dit account op onze website");
     }
  };

  return (
    <>
     <div className={style.container}>
        <div className={style.content}>
          <div className={style.part}>
            <div className={style.header}>
              <h1 className={style.header_title}>Log in om jullie reis te starten</h1>
            </div>
            <div className={style.login}>
              <form className={style.container_google} onSubmit={handleGoogleLogin}>
                <input className={style.button_google} type="submit" value="Login met Google"/>
              </form>
              <p className={style.form_option}>OF</p>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className={style.input_container}>
                    <p className={style.input_text}>E-mail</p> <p className={style.form_error}>{emailError}</p>
                    <input  className={style.form_input} label="Email" name="email" type="email" placeholder="Vul hier je email in" value={email} onChange={e => setEmail(e.currentTarget.value)} />
                  </div>
                  <div className={style.input_container}>
                    <p className={style.input_text}>Wachtwoord</p> <p className={style.form_error}>{passwordError}</p>
                    <input className={style.form_input} label="Password" type="password" name="Password" placeholder="Vul hier je wachtwoord in" value={password} onChange={e => setPassword(e.currentTarget.value)} />
                  </div>
                  <div className={style.button_container}>
                    <p className={style.form_error}>{formError}</p>
                    <input className={style.button} type="submit" value="Login"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );


};

export default Login;

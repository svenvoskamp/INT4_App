import React, { useState } from "react";

import { useStores } from "../../hooks/index";
import User from "../../models/User";
import { useHistory } from "react-router-dom";



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

    const handleLogOut = async e => {
      e.preventDefault();
        await uiStore.logoutUser();
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
     if(result === "auth/user-not-found" || "auth/invalid"){
       setFormError("De inloggegevens zijn onjuist");
     }
  };

  return (
    <>
     <form onSubmit={handleLogOut}>
                <input type="submit" value="Log uit"/>
          </form>
    <div>
      <form onSubmit={handleGoogleLogin}>
        <input type="submit" value="Login with Google"/>
      </form>
    </div>

  <form onSubmit={handleSubmit}>
    <div>
      <p>E-mail</p> <p>{emailError}</p>
      <input
        label="Email"
        name="email"
        type="email"
        placeholder="Vul hier je email in"
        value={email}
        onChange={e => setEmail(e.currentTarget.value)}
      />
    </div>
    <div>
      <p>Wachtwoord</p> <p>{passwordError}</p>
      <input
        label="Password"
        type="password"
        name="Password"
        placeholder="Vul hier je wachtwoord in"
        value={password}
        onChange={e => setPassword(e.currentTarget.value)}
      />
    </div>
    <p>{formError}</p>
    <div>
      <input type="submit" value="Login"/>
    </div>
  </form>
  </>
  );


};

export default Login;

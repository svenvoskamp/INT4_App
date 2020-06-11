import React from "react";
import {NavLink, useHistory} from "react-router-dom";
import {ROUTES} from "../../consts";
import { useStores } from "../../hooks/index";
import style from "./home.module.css";

const Landing = () => {

  const { uiStore} = useStores();

  const handleLogOut = async e => {
    e.preventDefault();
      await uiStore.logoutUser();
  };

  return (
    <>
    <div className={style.content}>
    <form onSubmit={handleLogOut}>
            <input type="submit" value="Logout"/>
        </form>
      <h1 className={style.title}>Herbeleef jullie 
      huwelijksreis</h1>
      <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at justo velit. Pellentesque ipsum magna, interdum sit amet tristique vel, posuere sit amet lorem.</p>
      <NavLink exact strict to="/form">
        <button className={style.button}>Wij zijn er klaar voor</button>
      </NavLink>
    </div>
    </>
  );
};

export default Landing;

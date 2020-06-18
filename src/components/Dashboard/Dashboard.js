import React, { useState } from "react";
import { useStores } from "../../hooks/index";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import style from "./dashboard.module.css";

const Dashboard = () => {

  const { uiStore, activityStore, stepStore, countryStore } = useStores();
  const day = uiStore.currentDay;
  const country = countryStore.getCountryById(uiStore.currentBooking.countryId);
  if(day === 1 || day === 2){
  const currentDayActivities = activityStore.getActivitiesForCurrentDay(uiStore.currentBooking.typeId, uiStore.currentBooking.countryId, day);
  console.log(currentDayActivities);
  const activeCurrentDayActivity = activityStore.getActiveCurrentDayActivity(currentDayActivities);
  console.log(activeCurrentDayActivity);
  stepStore.getStepsForActivity(activeCurrentDayActivity.id);


  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.part}>
            <div className={style.header}>
              <h1 className={style.header_title}>Jullie {uiStore.currentDay}de dag in {country.country}</h1>
              <div className={style.header_subtitle}>
                <div className={style.line}></div>
                <p className={style.subtitle}>"{activeCurrentDayActivity.title}"</p>
              </div>
            </div>
          </div>
          {currentDayActivities.map(activity => (
            <img src = {activity.img} alt ="activity"/>
          ))
          }
          <div className={style.button_container}>
            {day === 1 &&
            <NavLink exact strict to="/step1">
                <p className={style.button}>Ga naar de activiteit</p>
            </NavLink>
            }
            {day === 2 &&
            <NavLink exact strict to="/bstep1">
                <p className={style.button}>Ga naar de activiteit</p>
            </NavLink>
            }
          </div>
        </div>
      </div>
    </>
  );
  }
  else {

    return (
      <>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.part}>
            <div className={style.header}>
              <h1 className={style.header_title}>Jullie {uiStore.currentDay}de dag in </h1>
              <div className={style.header_subtitle}>
                <div className={style.line}></div>
                <p className={style.subtitle}>"Een foto zegt meer dan duizend woorden"</p>
              </div>
            </div>
          </div>
          <video className={style.video} width="500" height = "500"  loop playsInline autoPlay muted>
            <source src="/assets/video/type_adventure.webm" type="video/webm"/>
            <source src="/assets/video/type_adventure.mp4" type="video/mp4"/>
          </video>
            <NavLink className={style.button_container} exact strict to="/cstep1">
            <p className={style.button}>Ga naar de activiteit</p>
          </NavLink>
        </div>
      </div>
    </>
  );
  }
};

export default Dashboard;

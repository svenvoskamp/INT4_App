import React, { useState } from "react";
import { useStores } from "../../hooks/index";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import style from "./dashboard.module.css";

const Dashboard = () => {

  const { uiStore, activityStore, stepStore, countryStore, typeStore } = useStores();
  const typeid = typeStore.getTypeById(uiStore.currentBooking.typeId);
  const type = typeid.type.toLowerCase();
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
      <div className = {`container dashboard_${type}`}>
        <div className="navigation">
          <div className="menu">
            <img className="menu_item" src="/assets/buttons/service_white.svg" />
            <img className="menu_item" src="/assets/buttons/time_white.svg" />
          </div>
        </div>
        <div className={style.content}>
          <div className={style.part}>
            <div className={style.header}>
              <h1 className={style.header_title}>Jullie {uiStore.currentDay}e dag in {country.country}</h1>
              <div className={style.header_subtitle}>
                <p className={style.subtitle}>"{activeCurrentDayActivity.title}"</p>
              </div>
            </div>
            <div className={style.info}>
              {currentDayActivities.map(activity => (
                <picture className={style.option_image} key={activity.id}>
                <source className={style.option_image} type="image/webp" srcSet={`${activity.img}.webp`}/>
                <img className={style.option_image} src={`${activity.img}.png`} alt="activity"/>
              </picture>
              ))
              }
            </div>
          </div>
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
      <div className = {`container dashboard_${type}`}>
        <div className="navigation">
          <div className="menu">
            <img className="menu_item" src="/assets/buttons/service_white.svg" />
            <img className="menu_item" src="/assets/buttons/time_white.svg" />
          </div>
        </div>
        <div className={style.content}>
          <div className={style.part}>
            <div className={style.header}>
              <h1 className={style.header_title}>Jullie {uiStore.currentDay}e dag in {country.country}</h1>
            </div>
          </div>
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

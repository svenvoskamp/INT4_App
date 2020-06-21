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

  const handleNextDay = () => {
    stepStore.empty();
    uiStore.setCurrentDay(uiStore.currentDay + 1);
  }

  return (
    <>
      <div className = {`dashboard`}>
        <div className={style.content}>
          <div className={style.part}>
            <div className={style.header}>
              <div className={style.header_profile}>
              <img className={style.header_logo} src="/assets/images/halo_red.svg" />
              <h1 className={style.header_title}>{uiStore.currentBooking.name1} & {uiStore.currentBooking.name2}</h1>
              </div>
              <div className={style.header_subtitle}>
                <p className={style.subtitle}>"Dag {uiStore.currentDay} van jullie .. reis in {country.country}"</p>
              </div>
            </div>
            <div>
              <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.5 49.6875C32.6497 49.6875 38.5475 47.2445 42.896 42.896C47.2445 38.5475 49.6875 32.6497 49.6875 26.5C49.6875 20.3503 47.2445 14.4525 42.896 10.104C38.5475 5.75546 32.6497 3.3125 26.5 3.3125C20.3503 3.3125 14.4525 5.75546 10.104 10.104C5.75546 14.4525 3.3125 20.3503 3.3125 26.5C3.3125 32.6497 5.75546 38.5475 10.104 42.896C14.4525 47.2445 20.3503 49.6875 26.5 49.6875V49.6875ZM26.5 53C33.5282 53 40.2686 50.208 45.2383 45.2383C50.208 40.2686 53 33.5282 53 26.5C53 19.4718 50.208 12.7314 45.2383 7.76167C40.2686 2.79196 33.5282 0 26.5 0C19.4718 0 12.7314 2.79196 7.76167 7.76167C2.79196 12.7314 0 19.4718 0 26.5C0 33.5282 2.79196 40.2686 7.76167 45.2383C12.7314 50.208 19.4718 53 26.5 53V53Z" fill="#424242"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M46.1813 9.646L10.6473 45.18L7.81885 42.3516L43.3528 6.81757L46.1813 9.646Z" fill="#424242"/>
              </svg>
              <p>Niet storen</p>
            </div>
            <div>
              <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.5 49.6875C32.6497 49.6875 38.5475 47.2445 42.896 42.896C47.2445 38.5475 49.6875 32.6497 49.6875 26.5C49.6875 20.3503 47.2445 14.4525 42.896 10.104C38.5475 5.75546 32.6497 3.3125 26.5 3.3125C20.3503 3.3125 14.4525 5.75546 10.104 10.104C5.75546 14.4525 3.3125 20.3503 3.3125 26.5C3.3125 32.6497 5.75546 38.5475 10.104 42.896C14.4525 47.2445 20.3503 49.6875 26.5 49.6875V49.6875ZM26.5 53C33.5282 53 40.2686 50.208 45.2383 45.2383C50.208 40.2686 53 33.5282 53 26.5C53 19.4718 50.208 12.7314 45.2383 7.76167C40.2686 2.79196 33.5282 0 26.5 0C19.4718 0 12.7314 2.79196 7.76167 7.76167C2.79196 12.7314 0 19.4718 0 26.5C0 33.5282 2.79196 40.2686 7.76167 45.2383C12.7314 50.208 19.4718 53 26.5 53V53Z" fill="#424242"/>
                <path d="M26.5 14C27.3222 14 28.1107 14.3161 28.692 14.8787C29.2734 15.4413 29.6 16.2044 29.6 17C29.6 17.36 29.538 17.705 29.414 18.035C35.7225 19.25 40.45 24.365 40.45 30.5H12.55C12.55 24.365 17.2775 19.25 23.586 18.035C23.462 17.705 23.4 17.36 23.4 17C23.4 16.2044 23.7266 15.4413 24.308 14.8787C24.8893 14.3161 25.6778 14 26.5 14V14ZM42 35H11V32H42V35ZM26.5 20.75C21.6795 20.75 17.5875 23.585 16.177 27.5H36.823C35.4125 23.585 31.3205 20.75 26.5 20.75Z" fill="#424242"/>
              </svg>
              <p>Service</p>
            </div>
            {day === 1 && (
            <div>
              <button onClick = {handleNextDay}>Naar volgende dag</button>
            </div>
            )}
             {day === 2 && (
            <div>
              <button onClick = {handleNextDay}>Naar volgende dag</button>
            </div>
            )}
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

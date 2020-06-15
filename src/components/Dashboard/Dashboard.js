import React, { useState } from "react";
import { useStores } from "../../hooks/index";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";

const Dashboard = () => {

  const { uiStore, activityStore, stepStore } = useStores();
  const day = uiStore.currentDay;
  if(day === 1 || day === 2){
  const currentDayActivity = activityStore.getActivityForCurrentDay(uiStore.currentBooking.typeId, uiStore.currentBooking.countryId, day);
  console.log(currentDayActivity);
  stepStore.getStepsForActivity(currentDayActivity.id);


  return (
    <>
    <p>Dashboard</p>
    <p>Welkom op jullie {uiStore.currentDay}e dag </p>
    <p> Dit is jullie activiteit {currentDayActivity.title}</p>
    {day === 1 &&
    <NavLink exact strict to="/step1">
        <button>Ga naar de activiteit</button>
    </NavLink>
    }
    {day === 2 &&
    <NavLink exact strict to="/bstep1">
        <button>Ga naar de activiteit</button>
    </NavLink>
    }
    </>
  );
  }
  else {
    return (
      <>
      <p>Dashboard</p>
      <p>Welkom op jullie {uiStore.currentDay}e dag </p>
      <p> Dit is jullie activiteit hercreeër jullie oude foto!</p>
      <NavLink exact strict to="/cstep1">
        <button>Ga naar de activiteit</button>
    </NavLink>
    </>
  );
  }
};

export default Dashboard;

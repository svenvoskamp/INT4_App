import React from "react";
import 'mobx-react-lite/batchingForReactDom'
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import { ROUTES } from "../../consts";
import Login from "./Login";
import Dashboard from "../Dashboard/Dashboard";
import ActivityOne from "../ActivityOne/index";
import Welcome from "../Welcome/Welcome";
import { useStores } from "../../hooks/index";
import { useObserver } from "mobx-react-lite";
import Step1 from "../ActivityOne/Step1";
import Step2 from "../ActivityOne/Step2";
import Step3 from "../ActivityOne/Step3";
import Step4 from "../ActivityOne/Step4";
import Step5 from "../ActivityOne/Step5";
import Step6 from "../ActivityOne/Step6";
import Step7 from "../ActivityOne/Step7";


const Authentication = () => {
  const { uiStore, stepStore } = useStores();
  return useObserver (() => (
    <>
      <Switch>
        <Route exact path={ROUTES.dashboard}>
          {
            uiStore.currentUser && uiStore.currentBooking ? (
              <>
              <Dashboard/>
              </>
            ):
            (
              <Redirect to={ROUTES.login}/>
            )
          }
        </Route>
        <Route exact path= {ROUTES.welcome}>
          {
             uiStore.currentUser && uiStore.currentBooking ? (
              <>
              <Welcome/>
              </>
            ):
            (
              <Redirect to={ROUTES.login}/>
            )
          }
        </Route>
          <Route exact path={ROUTES.step2}>
        {
            stepStore.steps.length > 0 && uiStore.currentDay === 1 ? (
          <Step2/>
            ):
            (
              <Redirect to={ROUTES.dashboard}/>
            )
        }
        </Route>
        <Route exact path={ROUTES.step3}>
        {
            stepStore.steps.length > 0 && uiStore.currentDay === 1  ? (
          <Step3/>
            ):
            (
              <Redirect to={ROUTES.dashboard}/>
            )
        }
        </Route>
        <Route exact path={ROUTES.step4 }>
        {
            stepStore.steps.length > 0 && uiStore.currentDay === 1  ? (
          <Step4/>
            ):
            (
              <Redirect to={ROUTES.dashboard}/>
            )
        }
        </Route>
        <Route exact path={ROUTES.step5}>
        {
            stepStore.steps.length > 0 && uiStore.currentDay === 1  ? (
          <Step5/>
            ):
            (
              <Redirect to={ROUTES.dashboard}/>
            )
        }
        </Route>
        <Route exact path={ROUTES.step6}>
        {
            stepStore.steps.length > 0 && uiStore.currentDay === 1  ? (
          <Step6/>
            ):
            (
              <Redirect to={ROUTES.dashboard}/>
            )
        }
        </Route>
        <Route exact path={ROUTES.step7}>
        {
            stepStore.steps.length > 0 && uiStore.currentDay === 1  ? (
          <Step7/>
            ):
            (
              <Redirect to={ROUTES.dashboard}/>
            )
        }
        </Route>
        <Route exact path={ROUTES.step1}>
        {
            stepStore.steps.length > 0 && uiStore.currentDay === 1  ? (
          <Step1/>
            ):
            (
              <Redirect to={ROUTES.dashboard}/>
            )
        }
        </Route>
        <Route path={ROUTES.login}>
        {
             uiStore.currentUser && uiStore.currentBooking ? (
              <>
              <Welcome/>
              </>
            ):
            (
              <>
              <Login/>
              </>
            )
          }

        </Route>
      </Switch>
    </>
    )
  );
};

export default Authentication;

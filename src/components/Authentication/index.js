import React from "react";
import 'mobx-react-lite/batchingForReactDom'
import { Switch, Route, Redirect } from "react-router-dom";
import { ROUTES } from "../../consts";
import Login from "./Login";
import Dashboard from "../Dashboard/Dashboard";
import Welcome from "../Welcome/Welcome";
import { useStores } from "../../hooks/index";
import { useObserver } from "mobx-react-lite";
import Step1 from "../ActivityOne/Step1";
import Step2 from "../ActivityOne/Step2";
import Step3 from "../ActivityOne/Step3";
import Step4 from "../ActivityOne/Step4";
import Step5 from "../ActivityOne/Step5";
import Step6 from "../ActivityOne/Step6";

import BStep1 from "../ActivityTwo/BStep1";
import BStep2 from "../ActivityTwo/BStep2";
import BStep3 from "../ActivityTwo/BStep3";
import BStep4 from "../ActivityTwo/BStep4";
import BStep5 from "../ActivityTwo/BStep5";

import CStep1 from "../ActivityThree/CStep1";
import CStep2 from "../ActivityThree/CStep2";


import End from "../End/End";
import OnboardingA from "../Onboarding/OnboardingA";
import OnboardingB from "../Onboarding/OnboardingB";
import OnboardingC from "../Onboarding/OnboardingC";




const Authentication = () => {
  const { uiStore, stepStore } = useStores();
  return useObserver (() => (
    <>
      <Switch>
        <Route exact path={ROUTES.dashboard}>
          {
            uiStore.currentDay === 4 ? (
              <Redirect to= {ROUTES.end}/>
            ):
            uiStore.currentUser && uiStore.currentBooking ? (
              <>
              <Dashboard/>
              </>
            ):

            (
              <Redirect to= {ROUTES.login}/>
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
        <Route exact path= {ROUTES.onboardinga}>
          {
             uiStore.currentUser && uiStore.currentBooking ? (
              <>
              <OnboardingA/>
              </>
            ):
            (
              <Redirect to={ROUTES.login}/>
            )
          }
        </Route>
        <Route exact path= {ROUTES.onboardingb}>
          {
             uiStore.currentUser && uiStore.currentBooking ? (
              <>
              <OnboardingB/>
              </>
            ):
            (
              <Redirect to={ROUTES.login}/>
            )
          }
        </Route>
        <Route exact path= {ROUTES.onboardingc}>
          {
             uiStore.currentUser && uiStore.currentBooking ? (
              <>
              <OnboardingC/>
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
        <Route exact path={ROUTES.bstep1}>
        {
            stepStore.steps.length > 0 && uiStore.currentDay === 2  ? (
          <BStep1/>
            ):
            (
              <Redirect to={ROUTES.dashboard}/>
            )
        }
        </Route>
        <Route exact path={ROUTES.bstep2}>
        {
            stepStore.steps.length > 0 && uiStore.currentDay === 2  ? (
          <BStep2/>
            ):
            (
              <Redirect to={ROUTES.dashboard}/>
            )
        }
        </Route>
        <Route exact path={ROUTES.bstep3}>
        {
            stepStore.steps.length > 0 && uiStore.currentDay === 2  ? (
          <BStep3/>
            ):
            (
              <Redirect to={ROUTES.dashboard}/>
            )
        }
        </Route>
        <Route exact path={ROUTES.bstep4}>
        {
            stepStore.steps.length > 0 && uiStore.currentDay === 2  ? (
          <BStep4/>
            ):
            (
              <Redirect to={ROUTES.dashboard}/>
            )
        }
        </Route>
        <Route exact path={ROUTES.bstep5}>
        {
            stepStore.steps.length > 0 && uiStore.currentDay === 2  ? (
          <BStep5/>
            ):
            (
              <Redirect to={ROUTES.dashboard}/>
            )
        }
        </Route>
        <Route exact path={ROUTES.cstep1}>
        {
            uiStore.currentDay === 3  ? (
          <CStep1/>
            ):
            (
              <Redirect to={ROUTES.dashboard}/>
            )
        }
        </Route>
         <Route exact path={ROUTES.cstep2}>
        {
            uiStore.currentDay === 3  ? (
          <CStep2/>
            ):
            (
              <Redirect to={ROUTES.dashboard}/>
            )
        }
        </Route>
        <Route exact path={ROUTES.end}>
        {
            uiStore.currentDay === 4  ? (
          <End/>
            ):
            (
              <Redirect to={ROUTES.welcome}/>
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

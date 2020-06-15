import React from "react";
import 'mobx-react-lite/batchingForReactDom'
import { Switch, Route, Redirect } from "react-router-dom";
import { ROUTES } from "../../consts";
import { useStores } from "../../hooks/index";
import { useObserver } from "mobx-react-lite";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";




const ActivityOne = () => {
  const {stepStore} = useStores();
  return useObserver (() => (
    <>
      <Switch>
        <Route exact path={ROUTES.step2}>
        {
            stepStore.steps.length > 0 ? (
          <Step2/>
            ):
            (
              <Redirect to={ROUTES.dashboard}/>
            )
        }
        </Route>
        <Route exact path={ROUTES.step3}>
        {
            stepStore.steps.length > 0 ? (
          <Step3/>
            ):
            (
              <Redirect to={ROUTES.dashboard}/>
            )
        }
        </Route>
        <Route exact path={ROUTES.step4}>
        {
            stepStore.steps.length > 0 ? (
          <Step4/>
            ):
            (
              <Redirect to={ROUTES.dashboard}/>
            )
        }
        </Route>
        <Route exact path={ROUTES.step5}>
        {
            stepStore.steps.length > 0 ? (
          <Step5/>
            ):
            (
              <Redirect to={ROUTES.dashboard}/>
            )
        }
        </Route>
        <Route exact path={ROUTES.step6}>
        {
            stepStore.steps.length > 0 ? (
          <Step6/>
            ):
            (
              <Redirect to={ROUTES.dashboard}/>
            )
        }
        </Route>
        <Route exact path={ROUTES.step7}>
        {
            stepStore.steps.length > 0 ? (
          <Step7/>
            ):
            (
              <Redirect to={ROUTES.dashboard}/>
            )
        }
        </Route>
        <Route exact path={ROUTES.step1}>
        {
            stepStore.steps.length > 0 ? (
          <Step1/>
            ):
            (
              <Redirect to={ROUTES.dashboard}/>
            )
        }
        </Route>
      </Switch>
    </>
    )
  );
};

export default ActivityOne;

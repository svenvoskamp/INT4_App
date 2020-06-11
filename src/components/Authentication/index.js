import React from "react";
import 'mobx-react-lite/batchingForReactDom'
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import { ROUTES } from "../../consts";
import Login from "./Login";
import Music from "../Music/Music";
import Welcome from "../Welcome/Welcome";
import { useStores } from "../../hooks/index";
import { useObserver } from "mobx-react-lite";


const Authentication = () => {
  const { uiStore } = useStores();
  return useObserver (() => (
    <>
      <Switch>
        <Route exact path={ROUTES.music}>
          {
            uiStore.currentUser && uiStore.currentBooking ? (
              <>
              <Music/>
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
        <Route path={ROUTES.login}>
        <>
        {
             uiStore.currentUser && uiStore.currentBooking ? (
              <>
              <Welcome/>
              </>
            ):
            (
              <Login/>
            )
          }

        </>
        </Route>
      </Switch>
    </>
    )
  );
};

export default Authentication;

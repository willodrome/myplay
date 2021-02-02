import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { OnboardingPage } from "../Pages/OnboardingPage";
import { ProfilePage } from "../Pages/ProfilePage";
import { GamesPage } from "../Pages/GamesPage";
import { TeamPage } from "../Pages/TeamPage";
import { CameraPage } from "../Pages/CameraPage";
import { LivePage } from "../Pages/LivePage";

export const useRoutes = isLoggedIn => {
  if (isLoggedIn) {
    return (
      <Switch>
        <Route exact path="/" component={OnboardingPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/games" component={GamesPage} />
        <Route exact path="/team" component={TeamPage} />
        <Route exact path="/camera" component={CameraPage} />
        <Route exact path="/live" component={LivePage} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path="/" component={OnboardingPage} />
    </Switch>
  );
};

import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "containers/Pages/Standalone/NotFoundDedicated";
import Auth from "./Auth";
import Login from "../Login";
import Application from "./Application";
import LandingCorporate from "./Landing";
import LandingCreative from "./LandingCreative";
import ThemeWrapper from "./ThemeWrapper";
import RegisterV2 from "../Pages/Users/RegisterV2";
import { LoginV3, Parent, RegisterV3 } from "../pageListAsync";
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

function App() {
  const token = localStorage.getItem("tgc-qxzsewa-access-token");
  return (
    <ThemeWrapper>
      <Switch>
        <Route path="/" exact component={LandingCorporate} />
        <Route path="/landing-creative" exact component={LandingCreative} />
        <Route path="/app" component={Application} />
        <Route path="/login" component={LoginV3} />
        <Route path="/register" component={RegisterV3} />
        <Route path="/parent" component={Parent} />
        <Route component={NotFound} />
      </Switch>
    </ThemeWrapper>
  );
}

export default App;

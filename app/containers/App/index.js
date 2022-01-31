import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from 'containers/Pages/Standalone/NotFoundDedicated';
import Auth from './Auth';
import Login from '../Login';
import Application from './Application';
import LandingCorporate from './Landing';
import LandingCreative from './LandingCreative';
import ThemeWrapper from './ThemeWrapper';
import Register from '../Pages/Users/Register';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

function AppIn() {
  const token = localStorage.getItem('tgc-qxzsewa-access-token');
  return (
    <ThemeWrapper>
      <Switch>
        <Route path="/" exact component={LandingCorporate} />
        <Route path="/landing-creative" exact component={LandingCreative} />
        <Route path="/app" component={Application} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </ThemeWrapper>
  );
}

function App() {
  const token = localStorage.getItem("tgc-qxzsewa-access-token");
  return <AppIn />;
}

export default App;

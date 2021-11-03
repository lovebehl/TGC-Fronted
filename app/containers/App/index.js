import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './Auth';
import Application from './Application';
import ThemeWrapper from './ThemeWrapper';
import Landing from './Landing';
import PrivateRoute from './privateRoute';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;


function App() {
  return (
    <ThemeWrapper>
      <Switch>
        <Route path="/" exact component={Landing} />
        <PrivateRoute exact path="/app" component={Application} />
        <Route component={Auth} />
      </Switch>
    </ThemeWrapper>
  );
}

export default App;

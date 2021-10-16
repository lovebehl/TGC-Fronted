import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from 'containers/Pages/Standalone/NotFoundDedicated';
import Auth from './Auth';
import Application from './Application';
import ThemeWrapper from './ThemeWrapper';
import Landing from './Landing';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;


function App() {
  return (
    <ThemeWrapper>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={Application} />
        <Route component={Auth} />
        <Route component={NotFound} />
      </Switch>
    </ThemeWrapper>
  );
}

export default App;

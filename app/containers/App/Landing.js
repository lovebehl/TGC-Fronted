import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Corporate from '../Templates/Corporate';
import { HomePageScreen, MerchantDashboard } from '../pageListAsync';
import Login from '../Login';

function Landing() {
  return (
    <Corporate>
      <Switch>
        <Route exact path="/" component={HomePageScreen} />
      </Switch>
    </Corporate>
  );
}

export default Landing;

import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { ThemeContext } from './ThemeWrapper';
import {
  BlankPage,
} from '../pageListAsync';

function Application(props) {
  const { history } = props;
  const changeMode = useContext(ThemeContext);
  return (
      <Switch>
        <Route exact path="/app" component={BlankPage} />
      </Switch>
  );
}

Application.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Application;

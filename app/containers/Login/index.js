import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { LoginForm } from 'dan-components/index.js';
import styles from 'dan-components/Forms/user-jss';
import showLog from '../../utils/logger';
import { loginUser } from '../../api/api/callApi';
import Toast from '../../utils/snackbar';
import ENUM from '../../constants/enum';
import Constants from '../../constants/contants';

function Login(props) {
  const [open, setopen] = useState(false);
  const [message, setmessage] = useState('');
  const [status, setstatus] = useState('');

  const handleClose = () => {
    setopen(false);
  };

  const title = brand.name + ' - Login';
  const description = brand.desc;
  const { classes } = props;

  const submitLogin = async (values) => {
    try {
      var nodes = values._root.entries;
      var data = {};
      nodes.forEach((el) => {
        data[`${el[0]}`] = `${el[1]}`;
      });
      const response = await loginUser(data);
      if (response) {
        if (response.STATUS === ENUM.ERROR) {
          setmessage(response.DATA.message);
          setstatus(ENUM.error);
          setopen(true);
        } else if (response === "") {
          setmessage(Constants.someErrorOcurred);
          setstatus(ENUM.error);
          setopen(true);
        } else if (response.STATUS === ENUM.SUCCESS) {
                 setmessage(Constants.loggedSucessfully);
                 setstatus(ENUM.statusSucess);
                 setopen(true);
                 localStorage.setItem(
                   "tgc-qxzsewa-access-token",
                   response.DATA.accessToken
                 );
                 localStorage.setItem(
                   "tgc-qxzsewa-email",
                   data.email
                 );
                 setTimeout(() => {
                   window.location.href = "/app";
                 }, 1000);
               }
      }
    } catch (error) {
      showLog(Constants.submitLoginError, error);
    }
  };
  return (
    <div className={classes.root}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <div className={classes.container}>
        <Toast
          open={open}
          duration={6000}
          handleClose={handleClose}
          message={message}
          status={status}
        />
        <div className={classes.userFormWrap}>
          <LoginForm onSubmit={submitLogin} />
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);

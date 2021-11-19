import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { LoginForm } from 'dan-components';
import styles from 'dan-components/Forms/user-jss';
import { ContactSupportOutlined } from '@material-ui/icons';
import axios from 'axios';
import { toast } from 'react-toastify';
import Constants from '../../../constants/contants';



function Login(props) {


  const submitForm = values => {

    const { email, password, remember } = Object.fromEntries(values._root.entries)

    const loginResponse = toast.loading(Constants.please_wait)

    axios.post("/api/auth/signin", { email, password })
      .then(res => {
        const { token } = res.data
        localStorage.setItem(Constants.token, token)

        if (remember) {
          localStorage.setItem(Constants.email, email)
          localStorage.setItem(Constants.password, password)
          localStorage.setItem(Constants.remember, remember)
        } else {
          localStorage.clear()
        }
        toast.update(loginResponse, {
          render: Constants.login_successfully,
          type: Constants.success,
          isLoading: false,
          closeOnClick: true,
          autoClose: true,
        });

        // return
        setTimeout(() => {
          console.log(`You submitted:\n\n${values}`);
          window.location.href = '/app';
        }, 500); // simulate server latency
      })
      .catch(err => {
        console.log(err)
        toast.update(loginResponse, {
          render: Constants.email_password_wrong,
          type: Constants.error,
          isLoading: false,
          closeOnClick: true,
          autoClose: true,
        });
      })

  };

  const title = brand.name + ' - Login';
  const description = brand.desc;
  const { classes } = props;
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
        <div className={classes.userFormWrap}>
          <LoginForm onSubmit={(values) => submitForm(values)} />
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);

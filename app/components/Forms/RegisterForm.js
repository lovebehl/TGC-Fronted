import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form/immutable';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Icon from '@material-ui/core/Icon';
import Hidden from '@material-ui/core/Hidden';
import brand from 'dan-api/dummy/brand';
import logo from 'dan-images/logo.png';
import { TextFieldRedux, CheckboxRedux } from './ReduxFormMUI';
import styles from './user-jss';
import { Grid } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './custom.css'

// validation functions
const required = value => (value === null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);
const phone = value => (
  value && !/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/i.test(value)
    ? 'Invalid Phone Number'
    : undefined
);

const passwordsMatch = (value, allValues) => {
  if (value !== allValues.get('password')) {
    return 'Passwords dont match';
  }
  return undefined;
};

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function RegisterForm(props) {
  const [tab, setTab] = useState(0);

  const handleChangeTab = (event, value) => {
    setTab(value);
  };
  const { classes, handleSubmit, pristine, submitting, deco } = props;

  return (
    <Fragment>
      <Hidden mdUp>
        <NavLink to="/" className={classNames(classes.brand, classes.outer)}>
          <img src={logo} alt={brand.name} />
          {brand.name}
        </NavLink>
      </Hidden>
      <Paper className={classNames(classes.paperWrap, deco && classes.petal)}>
        <Hidden smDown>
          <div className={classes.topBar}>
            <NavLink to="/" className={classes.brand}>
              <img src={logo} alt={brand.name} />
              {brand.name}
            </NavLink>
            <Button size="small" className={classes.buttonLink} component={LinkBtn} to="/login">
              <Icon className={classes.icon}>arrow_forward</Icon>
              Already have account ?
            </Button>
          </div>
        </Hidden>
        <Typography variant="h4" className={classes.title} gutterBottom>
          Register
        </Typography>
        <Tabs
          value={tab}
          onChange={handleChangeTab}
          indicatorColor="secondary"
          textColor="secondary"
          centered
          className={classes.tab}
        >
          <Tab label="Individual" />
          <Tab label="Corporate" />
        </Tabs>

        {tab === 0 && (
          <section className={classes.formWrap}>
            <form onSubmit={handleSubmit} className='custom-form-design'>
              <Grid container spacing={2}>
                <Grid item xs={6} className='custom-space'>
                  <FormControl className={classes.formControl}>
                    <Field
                      name="fname"
                      component={TextFieldRedux}
                      placeholder="First Name"
                      label="First Name"
                      required
                      className={classes.field}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6} className='custom-space'>
                  <FormControl className={classes.formControl}>
                    <Field
                      name="lname"
                      component={TextFieldRedux}
                      placeholder="Last Name"
                      label="Last Name"
                      required
                      className={classes.field}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6} className='custom-space'>
                  <FormControl className={classes.formControl}>
                    <Field
                      type='text'
                      name="address"
                      component={TextFieldRedux}
                      placeholder="Address Street"
                      label="Address Street"
                      required
                      className={classes.field}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6} className='custom-space'>
                  <FormControl className={classes.formControl}>
                    <Field
                      name="city"
                      component={TextFieldRedux}
                      placeholder="City"
                      label="City"
                      required
                      className={classes.field}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6} className='custom-space'>
                  <FormControl className={classes.formControl}>
                    <Field
                      name="state"
                      component={TextFieldRedux}
                      placeholder="State"
                      label="State  "
                      required
                      className={classes.field}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6} className='custom-space'>
                  <FormControl className={classes.formControl}>
                    <Field
                      name="Zip"
                      component={TextFieldRedux}
                      placeholder="Zip"
                      label="Zip  "
                      required
                      className={classes.field}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6} className='custom-space'>
                  <FormControl className={classes.formControl}>
                    <Field
                      name="birth"
                      type='date'
                      component={TextFieldRedux}
                      placeholder="Birth Date"
                      label=""
                      required
                      className={classes.field} />
                  </FormControl>
                </Grid>
                <Grid item xs={6} className='custom-space'>
                  <FormControl className={classes.formControl}>
                    <Field
                      name="email"
                      type='Email'
                      component={TextFieldRedux}
                      placeholder="Email"
                      label="Email"
                      required
                      validate={[required, email]}
                      className={classes.field} />
                  </FormControl>
                </Grid>
                <Grid item xs={6} className='custom-space'>
                  <FormControl className={classes.formControl}>
                    <Field
                      type='text'
                      name="Referredby"
                      component={TextFieldRedux}
                      placeholder="Referred by"
                      label="Referred by"
                      required
                      className={classes.field} />
                  </FormControl>
                </Grid>
                <Grid item xs={6} className='custom-space'>
                  <FormControl className={classes.formControl}>
                    <Field
                      type='text'
                      name="PhoneNumber"
                      component={TextFieldRedux}
                      placeholder="Phone Number"
                      label="Phone Number"
                      required
                      className={classes.field} />
                  </FormControl>
                </Grid>
                <Grid item xs={6} className='custom-space'>
                  <FormControl className={classes.formControl}>
                    <Field
                      type='text'
                      name="Numberofcards"
                      component={TextFieldRedux}
                      placeholder="Number of cards"
                      label="Number of cards"
                      required
                      className={classes.field} />
                  </FormControl>
                </Grid>
                <Grid item xs={6} className='custom-space'>
                  <FormControl className={classes.formControl}>
                    <Field
                      type='text'
                      name="Groupaffiliations"
                      component={TextFieldRedux}
                      placeholder="Group affiliations"
                      label="Group affiliations"
                      required
                      className={classes.field} />
                  </FormControl>
                </Grid>
              </Grid>

              {/* <FormControl className={classes.formControl}>
                  <Field name="passwordConfirm" component={TextFieldRedux} type="password" label="Re-type Password" required validate={[required, passwordsMatch]} className={classes.field}/>
                </FormControl> */}
              <div>
                <FormControlLabel
                style={{marginRight:'5px'}}
                  control={(
                    <Field
                      name="checkbox"
                      component={CheckboxRedux}
                      required
                      className={classes.agree}
                      
                    />
                  )}
                  label="I agree with"
                />
                <a href="#" className={classes.link}>Terms &amp; Condition</a>
              </div>
              <div className={classes.btnArea}>
                <Button variant="contained" color="primary" type="submit">
                  Continue<ArrowForward className={classNames(classes.rightIcon, classes.iconSmall)} disabled={submitting || pristine} />
                </Button>
              </div>
            </form>
          </section>
        )}
        {tab === 1 && (
          <section className={classes.formWrap}>
            <form onSubmit={handleSubmit} className='custom-form-design'>
              <Grid container spacing={2}>
                <Grid item xs={6} className='custom-space'>
                  <FormControl className={classes.formControl}>
                    <Field
                      name="TypeofBusiness"
                      component={TextFieldRedux}
                      placeholder="Type of Business"
                      label="Type of Business"
                      required
                      className={classes.field}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6} className='custom-space'>
                  <FormControl className={classes.formControl}>
                    <Field
                      name="Numberofemployees"
                      component={TextFieldRedux}
                      placeholder="Number of employees"
                      label="Number of employees"
                      required
                      className={classes.field}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} className='custom-space'>
                  <FormControl className={classes.formControl}>
                    <Field
                      type='text'
                      name="address"
                      component={TextFieldRedux}
                      placeholder="Number of locations"
                      label="Number of locations"
                      required
                      className={classes.field}
                    />
                  </FormControl>
                </Grid>
              </Grid>

              {/* <FormControl className={classes.formControl}>
                  <Field name="passwordConfirm" component={TextFieldRedux} type="password" label="Re-type Password" required validate={[required, passwordsMatch]} className={classes.field}/>
                </FormControl> */}
              <div>
                <FormControlLabel
                  style={{marginRight:'5px'}} 
                  control={(
                    <Field
                      name="checkbox"
                      component={CheckboxRedux}
                      required
                      className={classes.agree}
                    />
                  )}
                  label="Agree with"
                />
                <a href="#" className={classes.link}>Terms &amp; Condition</a>
              </div>
              <div className={classes.btnArea}>
                <Button variant="contained" color="primary" type="submit">
                  Continue<ArrowForward className={classNames(classes.rightIcon, classes.iconSmall)} disabled={submitting || pristine} />
                </Button>
              </div>
            </form>
          </section>
        )}
        
      </Paper>
    </Fragment>
  );
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  deco: PropTypes.bool.isRequired,
};

const RegisterFormReduxed = reduxForm({
  form: 'immutableExample',
  enableReinitialize: true,
})(RegisterForm);

const reducer = 'ui';
const RegisterFormMapped = connect(
  state => ({
    force: state,
    deco: state.getIn([reducer, 'decoration'])
  }),
)(RegisterFormReduxed);

export default withStyles(styles)(RegisterFormMapped);

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
import { TextFieldRedux, CheckboxRedux } from './ReduxFormMUI';
import styles from './user-jss';
import { Grid } from '@material-ui/core'
import './custom.css'
import showLog from '../../utils/logger';

// validation functions
const required = value => (value === null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function RegisterForm(props) {
  const [type, setType] = useState("I")
  const { classes, handleSubmit, pristine, submitting, deco, onSubmit } = props;

  const changeCheck = async(t) =>{
    try {
      if(type === t){
        return
      }
      else if(type === "I"){
        setType("C")
      }
      else{
        setType("I")
      }
    } catch (error) {
     showLog("Change Individial Comapny Check Error", error) 
    }
  }

  return (
    <Fragment>
      <Hidden mdUp>
        <NavLink to="/" className={classNames(classes.brand, classes.outer)}>
          <img src={"./images/logo.png"} alt={brand.name} />
          {brand.name}
        </NavLink>
      </Hidden>
      <Paper className={classNames(classes.paperWrap, deco && classes.petal)}>
        <Hidden smDown>
          <div className={classes.topBar}>
            <NavLink to="/" className={classes.brand}>
              <img src={"./images/logo.png"} alt={brand.name} />
              {brand.name}
            </NavLink>
            <Typography variant="h6" className={classes.title} gutterBottom>
          Member Application
        </Typography>
          </div>
        </Hidden>
        
          <section className={classes.formWrap}>
            <form onSubmit={handleSubmit(onSubmit)} className='custom-form-design'>
            <Grid container spacing={2}>
                <Grid item xs={12} className='leftGrid'>
                <FormControlLabel
                style={{marginRight:'15px'}}
                  control={(
                    <Field
                      name="individual"
                      component={CheckboxRedux}
                      className={classes.agree}
                      checked={type === "I"}
                      onChange={()=>{changeCheck("I")}}
                      value={type === "I"}
                    />
                  )}
                  label="Individual"
                />
                  <FormControlLabel
                style={{marginRight:'5px'}}
                  control={(
                    <Field
                      name="company"
                      component={CheckboxRedux}
                      className={classes.agree}
                      checked={type === "C"}
                      onChange={()=>{changeCheck("C")}}
                      value={type === "C"}
                    />
                  )}
                  label="Company"
                />
                  </Grid>
                  </Grid>
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
                      name="password"
                      type='Password'
                      component={TextFieldRedux}
                      placeholder="Password"
                      label="Password"
                      required
                      className={classes.field} />
                  </FormControl>
                </Grid>
                <Grid item xs={4} className='custom-space'>
                  <FormControl className={classes.formControl}>
                    <Field
                      type='text'
                      name="phoneNumber"
                      component={TextFieldRedux}
                      placeholder="Phone Number"
                      label="Phone Number"
                      required
                      className={classes.field} />
                  </FormControl>
                </Grid>
                <Grid item xs={4} className='custom-space'>
                  <FormControl className={classes.formControl}>
                    <Field
                      name="birth"
                      type='date'
                      component={TextFieldRedux}
                      placeholder="Birth Date"
                      label=""
                      required
                      className={classes.field} 
                      />
                  </FormControl>
                </Grid>
                <Grid item xs={4} className='custom-space'>
                  <FormControl className={classes.formControl}>
                    <Field
                      type='number'
                      name="numberOfCards"
                      component={TextFieldRedux}
                      placeholder="Number of cards"
                      label="Number of cards"
                      required
                      className={classes.field} />
                  </FormControl>
                </Grid>
                <Grid item xs={12} className='custom-space'>
                  <FormControl className={classes.formControl}>
                    <Field
                      type='text'
                      name="address"
                      component={TextFieldRedux}
                      placeholder="Address"
                      label="Street Address"
                      required
                      className={classes.field}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={3} className='custom-space'>
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
                  <Grid item xs={3} className='custom-space'>
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
                      name="zip"
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
                      type='text'
                      name="referredBy"
                      component={TextFieldRedux}
                      placeholder="Referred by"
                      label="Referred by"
                      className={classes.field} />
                  </FormControl>
                </Grid>
                <Grid item xs={6} className='custom-space'>
                  <FormControl className={classes.formControl}>
                    <Field
                      type='text'
                      name="groupAffiliations"
                      component={TextFieldRedux}
                      placeholder="Group affiliations"
                      label="Group affiliations"
                      className={classes.field} />
                  </FormControl>
                </Grid>
              </Grid>
              {type === "C" && <>
              <Grid container spacing={2}>
                <Grid item xs={4} className='custom-space'>
                  <FormControl className={classes.formControl}>
                    <Field
                      name="typeOfBusiness"
                      component={TextFieldRedux}
                      placeholder="Type of Business"
                      label="Type of Business"
                      required
                      className={classes.field}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={4} className='custom-space'>
                  <FormControl className={classes.formControl}>
                    <Field
                      name="numberOfEmployees"
                      component={TextFieldRedux}
                      placeholder="Number of employees"
                      label="Number of employees"
                      required
                      className={classes.field}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={4} className='custom-space'>
                  <FormControl className={classes.formControl}>
                    <Field
                      type='text'
                      name="locations"
                      component={TextFieldRedux}
                      placeholder="Number of locations"
                      label="Number of locations"
                      required
                      className={classes.field}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              </>}
              <div>
                <FormControlLabel
                style={{marginRight:'5px'}}
                  control={(
                    <Field
                      name="tnc"
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
                  Submit Application
                </Button>
                <Button size="small" className={classes.buttonLink} component={LinkBtn} to="/login">
              Already Have Account? Go to Login &nbsp;
              <Icon className={classes.icon}>arrow_forward</Icon>
            </Button>
              </div>
            </form>
          </section>
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

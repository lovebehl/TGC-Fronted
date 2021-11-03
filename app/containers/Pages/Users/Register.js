import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import brand from 'dan-api/dummy/brand';
import { RegisterForm } from 'dan-components';
import styles from 'dan-components/Forms/user-jss';
import showLog from '../../../utils/logger';
import { registerUser } from '../../../api/api/callApi';
import Toast from '../../../utils/snackbar';

function Register(props) {
  const [open, setopen] = useState(false)
  const [message, setmessage] = useState("")
  const [status, setstatus] = useState("")
    const handleClose = () =>{
    setopen(false)
    }

  const submitForm = async(values) => {
    try { 
      var nodes = values._root.nodes
      var data = {}
      nodes.forEach((el)=>{
      if(el.nodes){
        el.nodes.forEach((item)=>{
         data[`${item.entry[0]}`] = `${item.entry[1]}`
        })
      }
      else{
        data[`${el.entry[0]}`] = `${el.entry[1]}`
      }
      })
      const response = await registerUser({
        "email": data.email?data.email:"",
        "password": data.password?data.password:"",
        "applicationType": data.typeOfBusiness?"company":"individual",
        "phoneNumber": data.phoneNumber?data.phoneNumber:"",
        "firstName": data.fname?data.fname:"",
        "lastName": data.lname?data.lname:"",
        "dob": data.birth?data.birth:"",
        "address": data.address?data.address:"",
        "city": data.city?data.city:"",
        "state": data.state?data.state:"",
        "zipCode": data.zip?data.zip:"",
        "referredBy": data.referredBy?data.referredBy:"",
        "numberOfCards": data.numberOfCards?data.numberOfCards:"",
        "groupAffliations": data.groupAffiliations?data.groupAffiliations:"",
        "typeOfBusiness": data.typeOfBusiness?data.typeOfBusiness:"",
        "numberOfEmployees": data.numberOfEmployees?data.numberOfEmployees:"",
        "numberOfLocations": data.locations?data.locations:"",
      })
      showLog("Register APi response",response)
      if(response){
        if(response.STATUS === "ERROR"){
        setmessage(response.DATA.message)
        setstatus("error")
        setopen(true)
      }
      else if(response === ""){
      setmessage("Some Error Ocurred !!")
      setstatus("error")
      setopen(true)
      }
      else if(response.STATUS === "SUCCESS"){
         setmessage(response.DATA.message)
         setstatus("success")
         setopen(true)
         setTimeout(() => {
           window.location.href = '/login';
         }, 1000);
        }
    }
    } catch (error) {
      showLog("Registration Form Submit Error",error)
    }
  };

  const title = brand.name + ' - Register';
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
        <Toast open={open} duration={6000} handleClose={handleClose} message={message} status={status}/>
        <div className={classes.userFormWrap}>
          <RegisterForm onSubmit={submitForm} />
        </div>
      </div>
    </div>
  );
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);

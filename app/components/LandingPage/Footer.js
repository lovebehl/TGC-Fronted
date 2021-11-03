import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import logo from 'dan-images/logo.png';
import brand from 'dan-api/dummy/brand';
import link from 'dan-api/ui/link';
import styles from './landingStyle-jss';
import { TextField, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
let counter = 0;
function createData(name, url) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
  };
}
function Footer(props) {
  const { classes } = props;
  const menuList = [
    createData('Home', '#home'),
    createData('Advantages', '#advantages'),
    createData('Contact', '#contact'),
    createData('Apply', '#apply'),
    createData('Log In', '#login'),
  ];

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.spaceContainer}>
          <div className={classes.grideThree}>
            <Typography variant='h4' className={classes.colorWhite}>Contact Us</Typography>
            <Typography className={classes.colorWhite}>Send us a message.</Typography>
            <form className='footer-contact'>
              <TextField
                id="outlined-multiline-static"
                label="Name"
                fullWidth
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
                InputProps={{
                  classes: {
                     root: classes.borderColor
                  }
                }}
              />
              <TextField
                id="outlined-multiline-static"
                label="Email"
                fullWidth
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
                InputProps={{
                  classes: {
                     root: classes.borderColor
                  }
                }}
              />
              <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                fullWidth
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
                InputProps={{
                  classes: {
                     root: classes.borderColor
                  }
                }}
              />
            </form>
          </div>
          <div className={classes.grideThree}>
            <Box display='flex' justifyContent='center'>
              <Box textAlign='left' display='inline-block' alignItems='left'>
                <Typography variant='h4' className={classes.colorWhite}>Sitemap</Typography>
                <Typography className={classes.colorWhite}>All our pages</Typography>
                <nav className={classes.sitemap}>
                  <ul>
                    {menuList.map(item => (
                      <li className={classes.sitemapLink} key={item.id.toString()}>
                        <Link className={classes.sitemapLinkUi}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Box>
            </Box>
          </div>
          <div className={classes.grideThree}>
            <div className={classes.BrandFooterAlign}>
              <div className={classes.Footerbrand}>
                <img src={logo} alt={brand.name} />
              </div>
              <ul className={classes.BrandFooterContact}>
                <li><LocalPhoneIcon/> 713-554-GOLD</li>
                <li><MailOutlineIcon/> info@texasgold.com</li>
              </ul>
              <Typography variant='body2' className={classes.colorWhite}>Copyright 2021 All Rights Reserved  Texas Gold Card, Inc. </Typography>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Footer);

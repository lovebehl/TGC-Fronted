import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './landingStyle-jss';
import images from './../../api/images/photos';
import { Button } from '@material-ui/core/';
import {Box} from '@material-ui/core'

let counter = 0;
function createFeatureData(icon, title, desc ,sub_text) {
  counter += 1;
  return {
    id: counter,
    icon,
    title,
    desc,
    sub_text,
  };
}

function Feature(props) {
  const { classes, slideMode } = props;
  const featureList = [
    createFeatureData(
      'ion-ios-infinite-outline', 
      'escape the matrix', 
      'Texas Gold dollars’ value are tied to the price of Gold',
      'Imagine a life of using money system based on markets and the price of gold instead of a fiat currency system malevolently and perpetulently designed to rob you of your wealth.'
    ),
  ];

  return (
    <div className={classNames(slideMode ? classes.mono : classes.color)}>
      <div className={!slideMode ? classes.container : ''}>
        {/* <Title title="Main Feature" align="center" monocolor={slideMode && true} /> */}
        
        {/* <Grid container rowSpacing={1} spacing={5}> */}
        <Grid alignItems="center" container className={classes.root} >
            
            {featureList.map(item => (
              <>
              
                <Grid xs={6} key={item.id.toString()}>
                  <img src='https://dummyimage.com/400x400/d8c28bba/fff' alt='#'/>
                </Grid>
                <Grid xs={6} align='left'>
                <Box mb={2}>
                  <Typography m={2} variant="h6" className={slideMode ? classes.colorWhite : ''}>
                    {item.title}
                  </Typography>
                </Box>
                <Box mb={2} >
                  <Typography className={slideMode ? classes.colorWhite : ''}>
                    {item.desc}
                  </Typography>
                
                </Box>
                  <Typography variant="p" className={slideMode ? classes.colorWhite : ''}>
                    {item.sub_text}
                  </Typography>
                  <Box mt={2} >
                    <Button variant="contained">
                      Read More
                    </Button>
                  </Box>
                </Grid>
              </>
            ))}
        </Grid>


        <Grid container className={classes.root} >
          
        </Grid>
      </div>
    </div>
  );
}

Feature.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool
};

Feature.defaultProps = {
  slideMode: false
};

export default withStyles(styles)(Feature);

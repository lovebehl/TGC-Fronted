import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import link from 'dan-api/ui/link';
import styles from './landingStyle-jss';
import BannerParallax from './BannerParallax';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from '@material-ui/core/Grid';
import { Box, Container } from '@material-ui/core';
function Banner(props) {
  const { classes, slideMode } = props;
  const reducer = 'ui';
  const gradient = useSelector(state => state.getIn([reducer, 'gradient']));
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  console.log(classes)

  return (
    <div
      className={
        classNames(
          classes.banner,
          gradient ? classes.gradient : classes.solid,
          slideMode ? classes.out : classes.fit
        )
      }
    >
      {!slideMode && <BannerParallax />}
      <Slider {...settings}>
        
        <>
          <div className={!slideMode ? classes.container : ''}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
              className='MuiGrid-container'
            >
              <Box align='left' className='MuiGrid-grid-xs-8'>
                <Box mb={2}>
                  <Typography m={2} variant='h3' className={classes.colorWhite}>A gold-backed</Typography>
                </Box>
                <Box mb={2}>
                  <Typography mb={2}>money solution</Typography>
                  <Box mb={2}>
                  </Box>
                  <Typography mb={2}>For Member to Member Transactions</Typography>
                </Box>
              </Box>

              <Box sx={{ justifyContent: 'flex-end' }} className='MuiGrid-grid-xs-4 ' >
                <img src='https://dummyimage.com/300x300/d8c28bba/fff' alt='#' />
              </Box>
            </Box>
          </div>
        </>
        <>
          <div className={!slideMode ? classes.container : ''}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
              className='MuiGrid-container'
            >
              <Box align='left' className='MuiGrid-grid-xs-8'>
                <Box mb={2}>
                  <Typography m={2} variant='h3' className={classes.colorWhite}>A gold-backed</Typography>
                </Box>
                <Box mb={2}>
                  <Typography mb={2}>money solution</Typography>
                  <Box mb={2}>
                  </Box>
                  <Typography mb={2}>For Member to Member Transactions</Typography>
                </Box>
              </Box>

              <Box sx={{ justifyContent: 'flex-end' }} className='MuiGrid-grid-xs-4 ' >
                <img src='https://dummyimage.com/300x300/d8c28bba/fff' alt='#' />
              </Box>
            </Box>
          </div>
        </>
      </Slider>
    </div>
  );
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool
};

Banner.defaultProps = {
  slideMode: false
};

const MemoedBanner = memo(Banner);
export default (withStyles(styles)(MemoedBanner));

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from "react-slick";
import imgApi from 'dan-api/images/photos';
import 'dan-styles/vendors/react-animated-slider/react-animated-slider.css';
import Title from './Title';
import styles from './landingStyle-jss';

const content = [
  {
    title: 'Vulputate Mollis Ultricies',
    image: imgApi[11],
    user: 'Luanda Gjokaj',
  },
  {
    title: 'Tortor Dapibus Commodo',
    image: imgApi[14],
    user: 'Erich Behrens',
  },
  {
    title: 'Phasellus volutpat metus',
    image: imgApi[15],
    user: 'Bruno Vizovskyy',
  },
  {
    title: 'Vulputate Mollis Ultricies',
    image: imgApi[11],
    user: 'Luanda Gjokaj',
  },
  {
    title: 'Tortor Dapibus Commodo',
    image: imgApi[14],
    user: 'Erich Behrens',
  },
  {
    title: 'Phasellus volutpat metus',
    image: imgApi[15],
    user: 'Bruno Vizovskyy',
  }
];


function GoldCard(props) {
  const { classes, slideMode } = props;
  const settings = {
    infinite: true,
    slidesToShow: 6,
    speed: 500,
    rows: 1,
    slidesPerRow: 1
  };
  return (
    <div className={classes.testimonials}>
      <div className={!slideMode ? classes.container : classes.fullSliderContent}>
        <Title title="Texas Gold Card in Action!" desc='Member’s experiences' align="center" monocolor={slideMode && true} />
        <div className={classes.sliderWrap}>
          <Slider {...settings} className="slider-wrapper">
          {content.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt='#'/>
            </div>
          ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

GoldCard.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool,
};

GoldCard.defaultProps = {
  slideMode: false
};

export default withStyles(styles)(GoldCard);

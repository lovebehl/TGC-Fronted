import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import imgData from "dan-api/images/imgData";
import "dan-styles/vendors/slick-carousel/slick-carousel.css";
import "dan-styles/vendors/slick-carousel/slick.css";
import "dan-styles/vendors/slick-carousel/slick-theme.css";
import Constants from "../../constants/contants";
import Title from "./Title";

const styles = {
  item: {
    textAlign: "center",
    "& img": {
      margin: "10px auto",
    },
  },
};

function MemberExperience(props) {
  const { classes, slideMode } = props;
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className={classes.testimonials}>
      <div
        className={!slideMode ? classes.container : classes.fullSliderContent}
        style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 80 }}
      >
        <Title
          title={Constants.texasGoldCard}
          align="center"
          monocolor={slideMode && true}
        />
        <div className={classes.root}>
          <Slider {...settings}>
            {imgData.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <img src={item.img} alt={item.title} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

MemberExperience.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool,
};
MemberExperience.defaultProps = {
  slideMode: false,
};

export default withStyles(styles)(MemberExperience);

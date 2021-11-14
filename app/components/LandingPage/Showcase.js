import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
import Grid from "@material-ui/core/Grid";
import ShowcaseParallax from "./ShowcaseParallax";
import Title from "./Title";
import styles from "./landingStyle-jss";
import Constants from "../../constants/contants";
import { NewsCard } from "dan-components";
import Typography from "@material-ui/core/Typography";
import imgApi from "dan-api/images/photos";

function Showcase(props) {
  const { classes, slideMode, width } = props;

  return (
    <section className={classes.showcase}>
      {!slideMode && <ShowcaseParallax />}
      <div className={classes.container}>
        <Grid container className={classes.root} spacing={5}>
          <Grid xs={12}>
            <Title title={Constants.escapeTheMatrix} />
          </Grid>
          <Grid
            container
            className={classes.root}
            spacing={5}
          >
            <Grid item sm={6} md={4} xs={12}>
              <NewsCard image={imgApi[8]} title="Contemplative Reptile">
                <Typography gutterBottom variant="h5" component="h2">
                  Lorem ipsum
                </Typography>
                <Typography component="p">
                  Aliquam venenatis magna et odio lobortis maximus. Nullam in
                  tortor ligula. Proin maximus risus nunc
                </Typography>
              </NewsCard>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

Showcase.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  slideMode: PropTypes.bool,
};

Showcase.defaultProps = {
  slideMode: false,
};

export default withWidth()(withStyles(styles)(Showcase));

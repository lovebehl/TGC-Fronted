import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
import Grid from "@material-ui/core/Grid";
import ShowcaseCard from "../CardPaper/ShowcaseCard";
import ShowcaseParallax from "./ShowcaseParallax";
import Title from "./Title";
import styles from "./landingStyle-jss";
import Constants from "../../constants/contants";

function Showcase(props) {
  const { classes, slideMode } = props;

  return (
    <section className={classes.showcase}>
      {!slideMode && <ShowcaseParallax />}
      <div className={classes.container}>
        <Grid container className={classes.root} spacing={5}>
          <Grid xs={12}>
            <Title title={Constants.escapeTheMatrix} />
          </Grid>
          <Grid container className={classes.root} spacing={5}>
            <Grid item sm={6} md={4} xs={12}>
              <ShowcaseCard
                title="Curabitur"
                desc="Nulla vehicula leo ut augue tincidunt"
                action="See Demo"
                image="/images/screen/thumb5.jpg"
              />
            </Grid>

            <Grid item sm={6} md={4} xs={12}>
              <ShowcaseCard
                title="Curabitur"
                desc="Nulla vehicula leo ut augue tincidunt"
                action="See Demo"
                image="/images/screen/thumb5.jpg"
              />
            </Grid>
            <Grid item sm={6} md={4} xs={12}>
              <ShowcaseCard
                title="Curabitur"
                desc="Nulla vehicula leo ut augue tincidunt"
                action="See Demo"
                image="/images/screen/thumb5.jpg"
              />
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

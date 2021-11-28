import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import OndemandVideo from "@material-ui/icons/OndemandVideo";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import colorfull from "dan-api/palette/colorfull";
import CounterWidget from "../../../Counter/CounterWidget";
import styles from "./widget-jss";

function CurrencyWidget(props) {
  const { classes } = props;
  return (
    <div className={classes.rootCounterFull}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <CounterWidget
            color={colorfull[0]}
            start={0}
            end={207}
            duration={3}
            title="TGC"
          >
            <OndemandVideo className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={6} md={6}>
          <CounterWidget
            color={colorfull[1]}
            start={0}
            end={300}
            duration={3}
            title="Gold"
          >
            <SupervisorAccount className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
      </Grid>
    </div>
  );
}

CurrencyWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CurrencyWidget);

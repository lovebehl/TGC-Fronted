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

function EscapeMatrix(props) {
  const { classes, slideMode, width } = props;

  const escapeMatrixData = [
    {
      title: "Escape the Matrix",
      subTitle: "Texas Gold dollars’ value are tied to the price of Gold",
      desc:
        "Imagine a life of using money system based on markets and the price of gold instead of a fiat currency system malevolently and perpetulently designed to rob you of your wealth.",
    },
    {
      title: "Escape the Matrix",
      subTitle: "Texas Gold dollars’ value are tied to the price of Gold",
      desc:
        "Imagine a life of using money system based on markets and the price of gold instead of a fiat currency system malevolently and perpetulently designed to rob you of your wealth.",
    },
  ];

  return (
    <section className={classes.showcase}>
      {!slideMode && <ShowcaseParallax />}
      <div className={classes.container}>
        <Grid
          className={classes.root}
          xs={12}
        >
          <Grid xs={12}>
            <Title title={Constants.escapeTheMatrix} />
          </Grid>
          <Grid container justify="center" spacing={3}>
            {escapeMatrixData.map((item) => {
              return (
                <Grid item sm={6} md={4} xs={12}>
                  <NewsCard
                    image={imgApi[8]}
                    title={item.title}
                    onClickButton={() => alert("hello")}
                  >
                    <Typography gutterBottom variant="h6" component="h2">
                      {item.subTitle}
                    </Typography>
                    <Typography component="p">{item.desc}</Typography>
                  </NewsCard>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

EscapeMatrix.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  slideMode: PropTypes.bool,
};

EscapeMatrix.defaultProps = {
  slideMode: false,
};

export default withWidth()(withStyles(styles)(EscapeMatrix));

import React, { Fragment } from "react";
import { PropTypes } from "prop-types";
import classNames from "classnames";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Header, Sidebar, BreadCrumb } from "dan-components";
import dataMenu from "dan-api/ui/menu";
import Decoration from "../Decoration";
import styles from "../appStyles-jss";
import MemberHeader from "../../../components/LandingPage/MemberHeader";
function AppLayout(props) {
  const {
    classes,
    children,
    toggleDrawer,
    sidebarOpen,
    loadTransition,
    pageLoaded,
    mode,
    gradient,
    deco,
    history,
    bgPosition,
    changeMode,
    place,
    titleException,
    handleOpenGuide,
  } = props;
  return (
    <Fragment>
      <MemberHeader />
      {/* <Header
        toggleDrawerOpen={toggleDrawer}
        margin={sidebarOpen}
        gradient={gradient}
        position="left-sidebar"
        changeMode={changeMode}
        mode={mode}
        title={place}
        history={history}
        openGuide={handleOpenGuide}
      /> */}
      <main
        className={classNames(classes.content)}
        id="mainContent"
      >
        <Decoration
          mode={mode}
          gradient={gradient}
          decoration={deco}
          bgPosition={bgPosition}
          horizontalMenu={false}
        />
        <section
          className={classNames(classes.mainWrap, classes.sidebarLayout)}
        >
          {titleException.indexOf(history.location.pathname) < 0 && (
            <div className={classes.pageTitle}>
              <Typography
                component="h4"
                className={
                  bgPosition === "header"
                    ? classes.darkTitle
                    : classes.lightTitle
                }
                variant="h4"
              >
                {place}
              </Typography>
            </div>
          )}
          {!pageLoaded && (
            <img
              src="/images/spinner.gif"
              alt="spinner"
              className={classes.circularProgress}
            />
          )}
          <Fade in={pageLoaded} {...(pageLoaded ? { timeout: 700 } : {})}>
            <div className={!pageLoaded ? classes.hideApp : ""}>
              {/* Application content will load here */}
              {children}
            </div>
          </Fade>
        </section>
      </main>
    </Fragment>
  );
}

AppLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  history: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  pageLoaded: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired,
  gradient: PropTypes.bool.isRequired,
  deco: PropTypes.bool.isRequired,
  bgPosition: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  titleException: PropTypes.array.isRequired,
  handleOpenGuide: PropTypes.func.isRequired,
};

export default withStyles(styles)(AppLayout);

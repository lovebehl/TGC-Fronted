import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import AppBar from "@material-ui/core/AppBar";
import dummy from "dan-api/dummy/dummyContents";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Hidden from "@material-ui/core/Hidden";
import AccountCircle from "@material-ui/icons/AccountCircle";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import Favorite from "@material-ui/icons/Favorite";
import PhotoLibrary from "@material-ui/icons/PhotoLibrary";
import { withStyles } from "@material-ui/core/styles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { About, Connection, Favorites, Albums, PapperBlock } from "dan-components";
import Cover from './Cover';
import bgCover from "dan-images/petal_bg.svg";
import styles from "dan-components/SocialMedia/jss/cover-jss";
import data from "../../../../containers/SampleApps/Timeline/api/timelineData";
import { fetchAction } from "../../../../containers/SampleApps/Timeline/reducers/timelineActions";
import { CardGiftcard, CardMembershipOutlined } from "@material-ui/icons";
import { Button, Grid, TextField } from "@material-ui/core";

function TabContainer(props) {
  const { children } = props;
  return <div style={{ paddingTop: 8 * 3 }}>{children}</div>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function MemberUserProfile(props) {
  const title = brand.name + " - Profile";
  const description = brand.desc;
  const { dataProps, classes, fetchData } = props;
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetchData(data);
  }, [fetchData, data]);

  const handleChange = (event, val) => {
    setValue(val);
  };

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <Cover
        coverImg={bgCover}
        avatar={dummy.user.avatar}
        name={dummy.user.name}
        desc="Consectetur adipiscing elit."
      />
      <AppBar position="static" className={classes.profileTab}>
        <Hidden mdUp>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab icon={<AccountCircle />} />
            <Tab icon={<SupervisorAccount />} />
          </Tabs>
        </Hidden>
        <Hidden smDown>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab icon={<AccountCircle />} label="Profile Setting" />
            <Tab icon={<CardMembershipOutlined />} label="Cards Setting" />
          </Tabs>
        </Hidden>
      </AppBar>
      {value === 0 && (
        <TabContainer>
          <PapperBlock title="Profile Settings" desc="">
            <Grid
              container
              spacing={3}
              xs={12}
              align="center"
              justify="center"
              direction="row"
            >
              <Grid item xs={6}>
                <TextField
                  id="outlined-with-placeholder"
                  label="Name"
                  placeholder="Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-with-placeholder"
                  label="Email"
                  placeholder="Email"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-with-placeholder"
                  label="Phone Number"
                  placeholder="Phone Number"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-with-placeholder"
                  label="Address"
                  placeholder="Address"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-with-placeholder"
                  label="Password Reset"
                  placeholder="Password Reset"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Update Profile
                </Button>
              </Grid>

              <Grid item>
                <Button variant="outlined" color="primary">
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </PapperBlock>
        </TabContainer>
      )}
      {value === 1 && (
        <TabContainer>
          <Connection />
        </TabContainer>
      )}
      {value === 2 && (
        <TabContainer>
          <Favorites />
        </TabContainer>
      )}
      {value === 3 && (
        <TabContainer>
          <Albums />
        </TabContainer>
      )}
    </div>
  );
}

MemberUserProfile.propTypes = {
  classes: PropTypes.object.isRequired,
  dataProps: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
};

const reducer = "socmed";
const mapStateToProps = (state) => ({
  force: state, // force state from reducer
  dataProps: state.getIn([reducer, "dataTimeline"]),
});

const constDispatchToProps = (dispatch) => ({
  fetchData: bindActionCreators(fetchAction, dispatch),
});

const MemberUserProfileMapped = connect(
  mapStateToProps,
  constDispatchToProps
)(MemberUserProfile);

export default withStyles(styles)(MemberUserProfileMapped);

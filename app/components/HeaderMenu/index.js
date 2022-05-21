import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import AppBar from "@material-ui/core/AppBar";
import logo from "dan-images/logo.png";
import brand from "dan-api/dummy/brand";
import SideNavMobile from "../LandingPage/SideNavMobile";
import styles from "../LandingPage/landingStyle-jss";
import Constants from "../../constants/contants";
import UserMenu from "../Header/UserMenu";
import { useHistory } from "react-router-dom";

const dashboardType = 'MERCHANT' // 'MEMBER' // 'STAFF' // 'ADMIN' //

let counter = 0;

function createData(name, url) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
  };
}

const HeaderMenu =(props)=> {
  const history = useHistory();
  const { classes, turnDarker } = props;
  const [open, setOpen] = useState(false);

  const reducer = "ui";
  const gradient = useSelector((state) => state.getIn([reducer, "gradient"]));
  

  const landingMenuList = [

  ];

  const memberMenuList = [
    createData("Home", "/app/member-dashboard"),
    createData("Send Money", "/app/member/send-money"),
    createData("Shop", "/app/tgc-marketplace"),
    createData("Buy Gold", "/app/member/buy-gold"),
  ];

  const staffDashboard = [
    createData("Home", "/app/member-dashboard"),
    createData("Transctions", "/app/member/send-money"),
    createData("Members", "/app/tgc-marketplace"),
    createData("Groups", "/app/member/buy-gold"),
    createData("Gold", "/app/member/buy-gold"),
  ];

  const adminDashboard = [
    createData("Home", "/app/member-dashboard"),
    createData("Transctions", "/app/member/send-money"),
    createData("Members", "/app/tgc-marketplace"),
    createData("Groups", "/app/member/buy-gold"),
    createData("Gold", "/app/member/buy-gold"),
    createData("Super User", "/app/member/buy-gold"),
  ]

  const toggleDrawerOpen = () => {
    setOpen(true);
  };

  const toggleDrawerClose = () => {
    setOpen(false);
  };
  
  const menuList = 
  dashboardType == "MERCHANT" ? memberMenuList : 
  dashboardType == "STAFF" ? staffDashboard : 
  dashboardType == "ADMIN" ? adminDashboard : 
  landingMenuList ;

  console.log(menuList, "menuList")
  return (
    <>
      <Hidden lgUp>
        <SwipeableDrawer
          onClose={toggleDrawerClose}
          onOpen={toggleDrawerOpen}
          open={open}
          anchor="left"
        >
          <SideNavMobile
            menuList={menuList}
            closeDrawer={toggleDrawerClose}
          />
        </SwipeableDrawer>
      </Hidden>
      <AppBar
        className={classNames(
          classes.header,
          turnDarker && classes.darker,
          gradient ? classes.gradient : classes.solid
        )}
      >
        <Hidden lgUp>
          <IconButton
            className={classes.menuButton}
            aria-label="Menu"
            onClick={toggleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <div className={classes.container}>
          <div className={classes.spaceContainer}>
            <NavLink to="/" className={classes.brand}>
              <img src={logo} alt={Constants.brandName} />
              {Constants.brandName}
            </NavLink>
            <Hidden mdDown>
              <nav>
                {menuList.map((item) => {
                  return (
                    <li key={item.id.toString()}>
                      <Button onClick={()=>history.push(item.url)} style={{ marginTop: 10 }}>
                        {item.name}
                      </Button>
                    </li>
                  )
                })}
              </nav>
              <UserMenu />
            </Hidden>
          </div>
        </div>
      </AppBar>
    </>
  );
}

HeaderMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  turnDarker: PropTypes.bool.isRequired,
};

export default withStyles(styles)(HeaderMenu);

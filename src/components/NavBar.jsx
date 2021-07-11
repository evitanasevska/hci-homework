import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    paddingLeft: 25,
  },
  align: {
    marginTop: 10,
  },
}));

function NavBar() {
  const classes = useStyles();
  const location = useLocation();
  const tab = location.pathname;

  const [isHome, setIsHome] = useState(false);
  const [isExplore, setIsExplore] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [isProfile, setIsProfile] = useState(false);

  useEffect(() => {
    if (tab === "/home") {
      setIsHome(true);
      setIsExplore(false);
      setIsCreate(false);
      setIsProfile(false);
    } else if (tab === "/explore") {
      setIsHome(false);
      setIsExplore(true);
      setIsCreate(false);
      setIsProfile(false);
    } else if (tab === "/create") {
      setIsHome(false);
      setIsExplore(false);
      setIsCreate(true);
      setIsProfile(false);
    } else if (tab === "/profile") {
      setIsHome(false);
      setIsExplore(false);
      setIsCreate(false);
      setIsProfile(true);
    }
  }, [tab]);

  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="sticky">
        <Toolbar>
          <h1 className={classes.title}>IMPACT</h1>

          <div>
            <Tooltip title="Home" arrow>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color={isHome ? "primary" : "inherit"}
                component={Link}
                to="/home"
                className={classes.align}
              >
                <HomeOutlinedIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Explore" arrow>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color={isExplore ? "primary" : "inherit"}
                component={Link}
                to="/explore"
                className={classes.align}
              >
                <LanguageOutlinedIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Create campaign" arrow>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color={isCreate ? "primary" : "inherit"}
                component={Link}
                to="/create"
                className={classes.align}
              >
                <AddBoxOutlinedIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Profile" arrow>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color={isProfile ? "primary" : "inherit"}
                component={Link}
                to="/profile"
                className={classes.align}
              >
                <AccountCircleOutlinedIcon />
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;

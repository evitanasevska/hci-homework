import React from "react";
import NavBar from "../components/NavBar";
import { Grid, Button, Fab, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import PopUp from "../components/PopUp";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  position: {
    padding: 30,
    margin: "5%",
  },
  back: {
    display: "inline",
    cursor: "pointer",
  },
  desctiption: {
    maxWidth: "100vh",
  },
  span: {
    color: "#3F50B5",
    fontWeight: "bold",
  },
  notifyTxt: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    fontSize: 12,
  },
  notifyIcon: {
    marginRight: 5,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CampaignDetails() {
  const classes = useStyles();
  const history = useHistory();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="details">
      <NavBar />
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="left"
        className={classes.position}
      >
        <Grid item xs={15}>
          <div
            onClick={() => {
              history.replace("/campaigns-at-location");
            }}
            className={classes.back}
          >
            <Fab
              size="small"
              color="primary"
              aria-label="add"
              className={classes.margin}
            >
              <ArrowBackIcon />
            </Fab>
            <Typography color="primary" className={classes.back}>
              {" "}
              back
            </Typography>
          </div>
        </Grid>

        <Grid item xs={15}>
          <h1>Campaign Title</h1>
          <p>Organization</p>
        </Grid>

        <Grid item xs={15} className={classes.desctiption}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Grid>

        <Grid item xs={15}>
          <p>
            <span className={classes.span}>when:</span> 06/05/2021
          </p>
          <p>
            <span className={classes.span}>where:</span> Skopje
          </p>
          <p>
            <span className={classes.span}>requirements:</span> None
          </p>
        </Grid>

        <Grid item xs={15}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<ChevronRightIcon />}
            onClick={handleClickOpen}
          >
            Apply as volunteer
          </Button>
        </Grid>

        <Grid item xs={15}>
          <div>
            <p className={classes.notifyTxt}>
              {" "}
              <CancelOutlinedIcon className={classes.notifyIcon} /> you've
              applied for this campaign
            </p>
          </div>
        </Grid>
      </Grid>

      <PopUp
        open={open}
        transitionComponent={Transition}
        onClose={handleClose}
      />
    </div>
  );
}

export default CampaignDetails;

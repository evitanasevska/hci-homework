import React from "react";
import NavBar from "../components/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#3F50B5",
    height: "100%",
  },
  message: {
    padding: 100,
    maxWidth: 1000,
  },
}));

function ApplySuccess() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div id="applySuccess" className={classes.background}>
      <NavBar />
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="left"
        className={classes.message}
      >
        <Grid item>
          <Typography color="secondary" variant="h2">
            You’ve successfully joined Campaign Title. Thank you for your time,
            see you there!
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<ChevronLeftIcon />}
            onClick={() => {
              history.replace("/campaign-details");
            }}
          >
            go back to Campaign details
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default ApplySuccess;

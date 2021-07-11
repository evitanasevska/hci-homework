import React from "react";
import NavBar from "../components/NavBar";
import { Button, Grid, Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  position: {
    padding: 30,
    margin: "2%",
  },
  paper: {
    padding: 30,
    backgroundColor: "#EEEEEE",
    maxWidth: "32vh",
    color: "gray",
    textAlign: "center",
  },
  width: {
    minWidth: "40vh",
  },
  btns: {
    marginRight: 10,
    paddingLeft: 47,
    paddingRight: 47,
  },
}));

function CampaignForm() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <NavBar />
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="left"
        className={classes.position}
      >
        <Grid item>
          <Paper className={classes.paper}>
            <p>UPLOAD PHOTO</p>
          </Paper>
        </Grid>
        <Grid item>
          <TextField
            id="outlined-name"
            label="Title"
            placeholder="Campaign title"
            variant="outlined"
            className={classes.width}
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-name"
            label="Organization"
            placeholder="The name of your organization"
            variant="outlined"
            className={classes.width}
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-name"
            label="Description"
            placeholder="Describe your cause"
            variant="outlined"
            className={classes.width}
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-name"
            label="When"
            placeholder="ex. 06/10/2021, 09:00 AM"
            variant="outlined"
            className={classes.width}
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-name"
            label="Where"
            placeholder="Location"
            variant="outlined"
            className={classes.width}
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-name"
            label="Requirements"
            placeholder="Skills needed"
            variant="outlined"
            className={classes.width}
          />
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            className={classes.btns}
            onClick={() => {
              history.replace("/create");
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.btns}
            onClick={() => {
              history.replace("/create");
            }}
          >
            Post
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default CampaignForm;

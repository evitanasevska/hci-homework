import React from "react";
import NavBar from "../components/NavBar";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  position: {
    padding: 30,
    marginTop: "5%",
    marginBottom: "5%",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  editBtn: {
    marginRight: 10,
  },
}));

function Profile() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        className={classes.position}
      >
        <Grid item>
          <Avatar width="200px" className={classes.avatar} />
        </Grid>

        <Grid item>
          <p>Name Surname</p>
        </Grid>

        <Grid item>
          <p>email@email.com</p>
        </Grid>

        <Grid item>
          <p>Skopje, Macedonia</p>
        </Grid>

        <Grid item>
          <Button
            color="primary"
            variant="outlined"
            className={classes.editBtn}
          >
            Edit info
          </Button>

          <Button color="primary" variant="contained">
            Logout
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;

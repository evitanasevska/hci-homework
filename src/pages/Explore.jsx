import React from "react";
import NavBar from "../components/NavBar";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import campaigns from "../constants/campaigns";
import CampaignListing from "../components/CampaignListingC";

const useStyles = makeStyles((theme) => ({
  gridOne: {
    padding: 30,
    marginTop: "5%",
    marginBottom: "5%",
  },
  gridTwo: {
    backgroundColor: "#3F50B5",
  },
  searchField: {
    minWidth: 400,
  },
  searchBtn: {
    marginLeft: 10,
    padding: 15,
  },
}));

function createCard(campaign) {
  return (
    <Grid item xs={12}>
      <CampaignListing
        key={campaign.id}
        title={campaign.title}
        description={campaign.description}
        edit={false}
      />
    </Grid>
  );
}

function Explore() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <NavBar />
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        className={classes.gridOne}
      >
        <Grid item>
          <Typography variant="h2" align="center">
            Explore the word!
          </Typography>
          <Typography variant="body1" align="center">
            Search for volunteering opportunities around the globe
          </Typography>
        </Grid>

        <Grid item>
          <TextField
            id="outlined-name"
            placeholder="Insert location"
            variant="outlined"
            className={classes.searchField}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.searchBtn}
            onClick={() => {
              history.replace("/campaigns-at-location");
            }}
          >
            <SearchIcon />
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        className={classes.gridTwo}
      >
        <Grid item>
          <Typography color="secondary" variant="h5">
            {" "}
            Popular campaigns:
          </Typography>
        </Grid>

        {campaigns.map(createCard)}
      </Grid>
    </div>
  );
}

export default Explore;

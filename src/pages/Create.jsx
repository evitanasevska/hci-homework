import React from "react";
import NavBar from "../components/NavBar";
import CampaignListing from "../components/CampaignListingA";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import campaigns from "../constants/campaigns";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useHistory } from "react-router-dom";

function createCard(campaign) {
  return (
    <Grid item xs={12}>
      <CampaignListing
        key={campaign.id}
        title={campaign.title}
        description={campaign.description}
        edit={true}
      />
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: "5%",
  },
  button: {
    paddingLeft: "26vh",
    paddingRight: "26vh",
  },
}));

function Create() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div id="create">
      <NavBar />
      <Grid
        className={classes.grid}
        container
        spacing={2}
        direction="column"
        alignItems="center"
        style={{ minHeight: "70vh" }}
      >
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<ChevronRightIcon />}
            onClick={() => {
              history.replace("/campaign-form");
            }}
          >
            Create Campaign
          </Button>
        </Grid>
        <Grid item>
          <h1>Your campaigns:</h1>
        </Grid>

        {campaigns.map(createCard)}
      </Grid>
    </div>
  );
}

export default Create;

import React from "react";
import NavBar from "../components/NavBar";
import CampaignListing from "../components/CampaignListingA";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import campaigns from "../constants/campaigns";

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: "5%",
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

function Home() {
  const classes = useStyles();

  return (
    <div id="home">
      <NavBar />

      <Grid
        className={classes.grid}
        container
        spacing={2}
        direction="column"
        alignItems="center"
        style={{ minHeight: "70vh" }}
      >
        {campaigns.map(createCard)}
      </Grid>
    </div>
  );
}

export default Home;

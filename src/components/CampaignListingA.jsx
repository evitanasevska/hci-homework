import React from "react";
import { Paper, Grid, ButtonBase, Button, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import placeholder from "../images/placeholder.png";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 30,
  },
  description: {
    maxWidth: "40vh",
  },
  editDeleteBtns: {
    margin: theme.spacing(0),
    display: "block",
  },
}));

function CampaignListing(props) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src={placeholder}
                height="100vh"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <h3>{props.title}</h3>
                <p className={classes.description}>{props.description}</p>
              </Grid>
            </Grid>
          </Grid>

          {props.edit ? (
            <Grid item>
              <Tooltip title="Edit campaign" placement="right" arrow>
                <IconButton
                  aria-label="delete"
                  className={classes.editDeleteBtns}
                  onClick={() => {
                    history.replace("/campaign-form");
                  }}
                >
                  <EditIcon color="primary" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Delete campaign" placement="right" arrow>
                <IconButton
                  aria-label="delete"
                  className={classes.editDeleteBtns}
                >
                  <DeleteIcon color="primary" />
                </IconButton>
              </Tooltip>
            </Grid>
          ) : (
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                endIcon={<ChevronRightIcon />}
                onClick={() => {
                  history.replace("/campaign-details");
                }}
              >
                More Info
              </Button>
            </Grid>
          )}
        </Grid>
      </Paper>
    </div>
    // <div className={classes.root}>
    //   <Paper className={classes.paper}>
    //     <Grid container spacing={1}>
    //       <Grid item>
    //         <img src={placeholder} alt="placeholder" />
    //       </Grid>

    //       <Grid item xs={12}>
    //         <h3>Title</h3>
    //         <p>Body</p>
    //       </Grid>
    //     </Grid>
    //   </Paper>
    // </div>
  );
}

export default CampaignListing;

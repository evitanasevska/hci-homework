import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useHistory } from "react-router-dom";

function PopUp(props) {
  const history = useHistory();
  return (
    <Dialog
      open={props.open}
      TransitionComponent={props.transitionComponent}
      keepMounted
      onClose={props.onClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        {"Are you sure you want to apply as a volunteer for this campaign?"}
      </DialogTitle>
      <DialogActions>
        <Button onClick={props.onClose} color="primary" variant="outlined">
          Cancel
        </Button>
        <Button onClick={()=> {history.replace("/apply-success")}} color="primary" variant="contained">
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default PopUp;

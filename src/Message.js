// importing package
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";

// message component
export function Message() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Forget Password</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Verification Link send through Mail!!!
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

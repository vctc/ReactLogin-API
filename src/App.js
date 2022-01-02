import "./App.css";

import { Signin } from "./Signin";
import { SignUp } from "./SignUp";
import { ResetPassword } from "./ResetPassword";
import { ForgetPassword } from "./ForgetPassword.js";
import { Route, Switch, Redirect } from "react-router-dom";
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";

// const URL=`https://616e488fa83a850017caa8e1.mockapi.io/users`;

export default function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/forgetpassword">
          <ForgetPassword />
        </Route>
        <Route exact path="/reset-password">
          <Message />
        </Route>
        <Route exact path="/resetpassword">
          <ResetPassword />
        </Route>
        <Route exact path="/">
          <Redirect to="/signin" />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

function Dashboard() {
  return <div className="dashboard">Dashboard Coming Soon...</div>;
}

function Message() {
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

import "./App.css";

import { Signin } from "./Signin";
import { SignUp } from "./SignUp";
import { ResetPassword } from "./ResetPassword";
import { ForgetPassword } from "./ForgetPassword.js";
import { Route, Switch,Redirect } from "react-router-dom";

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

function Dashboard(){
  return(
    <div className="dashboard">
      Dashboard Coming Soon...
    </div>
  )
}
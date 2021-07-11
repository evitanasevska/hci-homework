import React from "react";
import style from "./Login.module.css";
import { Grid, TextField, Paper, Button, FormControl } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  return (
    <div className={style.loginPage}>
      <h1 className={style.navTitle}>IMPACT</h1>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "70vh" }}
      >
        <Paper className={style.form}>
          <h2>Login</h2>
          <Grid item xs={12} className={style.textField}>
            <FormControl fullWidth>
              <TextField
                id="email"
                type="text"
                variant="outlined"
                placeholder="Email"
                inputProps={{ maxLength: 50 }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} className={style.textField}>
            <FormControl fullWidth>
              <TextField
                id="password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                placeholder="Password"
                inputProps={{ maxLength: 40 }}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={style.loginBtn}
              onClick={() => {
                history.replace("/home");
              }}
            >
              login
            </Button>
            <Link to="/register" className={style.signupBtn}>
              <Button
                variant="outlined"
                color="primary"
                className={style.signupBtn}
              >
                Sign up
              </Button>
            </Link>
          </Grid>
          <Link to="/" id="forgotPassword">
            Forgot password?
          </Link>
        </Paper>
      </Grid>
    </div>
  );
}

export default Login;

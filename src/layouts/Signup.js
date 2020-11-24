import React, { useState } from "react";
import axios from "axios";

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';

import AlertDismissable from '../components/Alerts/AlertDismissable';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(1, 0, 2),
    },
}));

export default function Signin(props) {
    const classes = useStyles();

    const [user, updateUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: ""
    })
    const [isAlert, setAlert] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        updateUser(prevValue => {
            if (name === "firstName") {
                return {
                    firstName: value,
                    lastName: prevValue.lastName,
                    email: prevValue.email,
                    password: prevValue.password,
                    repeatPassword: prevValue.repeatPassword
                }
            } else if (name === "lastName") {
                return {
                    firstName: prevValue.firstName,
                    lastName: value,
                    email: prevValue.email,
                    password: prevValue.password,
                    repeatPassword: prevValue.repeatPassword
                }
            } else if (name === "email") {
                return {
                    firstName: prevValue.firstName,
                    lastName: prevValue.lastName,
                    email: value,
                    password: prevValue.password,
                    repeatPassword: prevValue.repeatPassword
                }
            } else if (name === "password") {
                return {
                    firstName: prevValue.firstName,
                    lastName: prevValue.lastName,
                    email: prevValue.email,
                    password: value,
                    repeatPassword: prevValue.repeatPassword
                }
            } else if (name === "repeatPassword") {
                return {
                    firstName: prevValue.firstName,
                    lastName: prevValue.lastName,
                    email: prevValue.email,
                    password: prevValue.password,
                    repeatPassword: value
                }
            }
        })
    }

    function onSubmit(event) {
        event.preventDefault();

        console.log("Clicked");

        const User = {
            username: user.email,
            password: user.password
        }

    }

    function createAlert() {
        if (!isAlert) {
            return <h1></h1>;
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h4">
                    Create an Account!
                </Typography>
                <Grid container className={classes.form} spacing={2}>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <TextField
                            onChange={handleChange}
                            type="text" name="firstName" value={user.firstName}
                            label="First Name" variant="outlined"
                            required fullWidth autoFocus
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <TextField
                            onChange={handleChange}
                            type="text" name="lastName" value={user.lastName}
                            label="Last Name" variant="outlined" 
                            required fullWidth
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={8} lg={12}>
                        <TextField
                            onChange={handleChange}
                            type="email" name="email" value={user.email}
                            label="Email Address" variant="outlined" 
                            required fullWidth
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <TextField
                            onChange={handleChange}
                            type="password" name="password" value={user.password}
                            label="Password" variant="outlined"
                            required fullWidth
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <TextField
                            onChange={handleChange}
                            type="password" name="repeatPassword" value={user.repeatPassword}
                            label="Repeat Password" variant="outlined"
                            required fullWidth
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={8} lg={12}>
                        <Button
                            onClick={onSubmit} type="submit"
                            variant="contained" color="primary" size="large"
                            fullWidth
                            className={classes.submit}
                        >
                            Register Account
                        </Button>
                    </Grid>
                </Grid>
                <Typography variant="body2">Forgot Password?</Typography>
                <Typography variant="body2">Already have an account? Signin!</Typography>
            </div>
        </Container>
    )
}
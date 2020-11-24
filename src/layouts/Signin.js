import React, { useState } from "react";
import axios from "axios";

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Signin(props) {
    const classes = useStyles();

    const [user, updateUser] = useState({
        email: "",
        password: ""
    })
    const [isAlert, setAlert] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        updateUser(prevValue => {
            if (name === "email") {
                return {
                    email: value,
                    password: prevValue.password
                }
            } else if (name === "password") {
                return {
                    email: prevValue.email,
                    password: value
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
                    Signin
                </Typography>
                <form className={classes.form}>
                    <TextField
                        onChange={handleChange}
                        type="email" name="email" value={user.email}
                        label="Email Address" variant="outlined" margin="normal"
                        required fullWidth autoFocus
                    />
                    <div>{createAlert()}</div>
                    <TextField
                        onChange={handleChange}
                        type="password" name="password" value={user.password}
                        label="Password" variant="outlined"
                        required fullWidth
                    />
                    <Button
                        onClick={onSubmit} type="submit"
                        variant="contained" color="primary" size="large"
                        fullWidth
                        className={classes.submit}
                    >
                        Signin
                    </Button>
                </form>
                <Typography variant="body2">Forgot Password?</Typography>
                <Typography variant="body2">Already have an account? Signin!</Typography>
            </div>
        </Container>
    )
}
import React from "react";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import ArrowUpward from "@material-ui/icons/ArrowUpward";

import AccessTime from "@material-ui/icons/AccessTime";

import { Grid, Typography, makeStyles, Button, ButtonGroup } from '@material-ui/core';

import LineGraph from "components/Graphs/LineGraph";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

import dataConverter from "services/dataConverter";

const useStyles = makeStyles(styles);

export default function Kpi2(props) {
    const classes = useStyles();

    const data = dataConverter(props.data);

    function handleButtonClick(event) {
        props.handleButtonClick(event);
    }

    return (
        <Card chart>
            <CardHeader>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <Typography variant="h5">Sales: Today</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <ButtonGroup color="primary" size="small" aria-label="outlined primary button group">
                            <Button onClick={handleButtonClick} name="week">Week</Button>
                            <Button onClick={handleButtonClick} name="month">Month</Button>
                            <Button onClick={handleButtonClick} name="year">Year</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
                <LineGraph data={data[0]} keys={data[1]} height={350} />
            </CardHeader>
        </Card>
    )
}
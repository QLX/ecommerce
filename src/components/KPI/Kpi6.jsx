import React from "react";

import { Grid, Typography, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import CustomPieChart from "components/Graphs/PieChart";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

const useStyles = makeStyles(() => ({
    grid: {
        display: 'flex',
        flexFlow: 'row wrap'
    }
}))

export default function Kpi4(props) {
    const classes = useStyles();

    function handleButtonClick(event) {
        props.handleButtonClick(event);
    }

    return (
        <Grid container spacing={2} xs={12} sm={12} md={12} lg={12} className={classes.grid} >
            <Grid item xs={12} sm={12} md={12} lg={6} >
                <Card>
                    <CardHeader>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={12} lg={6}>
                                <Typography variant="h5">Total Product Sales: Today</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6}>
                                <ButtonGroup color="primary" size="small" aria-label="outlined primary button group" name="products">
                                    <Button onClick={handleButtonClick} name="today">Today</Button>
                                    <Button onClick={handleButtonClick} name="week">Week</Button>
                                    <Button onClick={handleButtonClick} name="month">Month</Button>
                                    <Button onClick={handleButtonClick} name="year">Year</Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                        <CustomPieChart products={props.currentData.products} />
                    </CardHeader>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} >
                <Card>
                    <CardHeader>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={12} lg={6}>
                                <Typography variant="h5">Total Dollar Sales: Today</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6}>
                                <ButtonGroup color="primary" size="small" aria-label="outlined primary button group" name="totalSales">
                                    <Button onClick={handleButtonClick} name="today">Today</Button>
                                    <Button onClick={handleButtonClick} name="week">Week</Button>
                                    <Button onClick={handleButtonClick} name="month">Month</Button>
                                    <Button onClick={handleButtonClick} name="year">Year</Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                        <CustomPieChart totalSales={props.currentData.totalSales} />
                    </CardHeader>
                </Card>
            </Grid>
        </Grid>
    )
}
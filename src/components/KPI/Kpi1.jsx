import React from "react";

import { Grid, makeStyles } from '@material-ui/core';

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";

import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Update from "@material-ui/icons/Update";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ReceiptIcon from '@material-ui/icons/Receipt';

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);



function iconGen(icon) {
    if (icon === "monetization") {
        return (
            <MonetizationOnIcon />
        )
    } else if (icon === "warning") {
        return (
            <ErrorOutlineIcon />
        )
    } else if (icon === "pencil") {
        return (
            <ReceiptIcon />
        )
    }
}

function KpiCard(props) {
    const classes = useStyles();
    return (
        <Card>
            <CardHeader stats icon>
                <CardIcon color={props.theme}>
                    {iconGen(props.icon)}
                </CardIcon>
                <p className={classes.cardCategory}>{props.title}</p>
                <h3 className={classes.cardTitle}>{props.content}</h3>
            </CardHeader>
            <CardFooter stats>
                <div className={classes.stats}>
                    <Update />
                    Just Updated
                </div>
            </CardFooter>
        </Card>
    )
}

const moreStyles = makeStyles(() => ({
    grid: {
        display: 'flex',
        flexFlow: 'row wrap'
    }
}))

export default function Kpi1(props) {
    const classes = moreStyles();
    return (
        <Grid container spacing={3} xs={12} sm={12} md={12} lg={12} style={{ padding: "0px" }}>
            {props.kpi1.map((kpi, index) => {
                return (
                    <Grid item key={index} md={4} lg={4} >
                        <KpiCard 
                            title={kpi.Category_Description} 
                            content={kpi.count} 
                            style={{ backgroundColor: kpi.Background_Color }}
                            theme="success"
                            icon={kpi.category_icon}
                        />
                    </Grid>
                )
            })}
        </Grid>
    )
}
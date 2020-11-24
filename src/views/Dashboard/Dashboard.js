import React, { useState, useEffect } from "react";
import axios from "axios";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import LineGraph from "components/Graphs/LineGraph";
import BarGraph from "components/Graphs/BarGraph";

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import Kpi1 from "components/KPI/Kpi1";
import Kpi2 from "components/KPI/Kpi2";
import Kpi3 from "components/KPI/Kpi3";
import Kpi6 from "components/KPI/Kpi6";

import dataConverter from "services/dataConverter";

import getMonth from "services/getMonth";

import { bugs, website, server } from "variables/general.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { Typography } from "@material-ui/core";

import data from 'jsonData';

const useStyles = makeStyles(styles);


export default function Dashboard() {
  const classes = useStyles();

  const [kpi1, updateKpi1] = useState([]);
  const [kpi2, updateKpi2] = useState({
    labels: {},
    series: {},
    currentData: {
      labels: [],
      series: []
    }
  });
  const [kpi3, updateKpi3] = useState([]);
  const [kpi6, updateKpi6] = useState({
    products: [],
    totalSales: [],
    currentData: {
      timeFrame: "",
      products: [],
      totalSales: []
    }
  });

  useEffect(() => {

    // ---------- Populated with JSON formatted Data from src/jsonData.js

    updateKpi1(data.kpi1);
    updateKpi2({
      labels: data.kpi2.labels,
      series: data.kpi2.series,
      currentData: {
        labels: data.kpi2.labels.week,
        series: data.kpi2.series.map(item => {
          return {
            name: item.name,
            count: item.count.week,
            isActive: item.isActive,
            Background_Color: item.Background_Color
          }
        })
      }
    });
    updateKpi3(data.kpi3);
    updateKpi6(() => {
      const products = data.kpi6[0];
      const totalSales = data.kpi6[1];
      const productsData = products.map(datum => {
        return {
          "id": datum.id,
          "label": datum.label,
          "value": datum.value.today,
          "color": datum.color
        }
      });
      const totalSalesData = totalSales.map(datum => {
        return {
          "id": datum.id,
          "label": datum.label,
          "value": datum.value.today,
          "color": datum.color
        }
      });
      return {
        products: data.kpi6[0],
        totalSales: data.kpi6[1],
        currentData: {
          products: productsData,
          totalSales: totalSalesData
        }
      }
    });

    // -------------------- REAL AXIOS CALL SETUP
    // KPI1 Real Route
    // http://gurupia.qlx.com/admin/GET_KPI1_Data.php?id=1

    // const requestOne = axios.get('http://localhost:5000/kpi1/');
    // const requestTwo = axios.get('http://localhost:5000/kpi2/');
    // const requestThree = axios.get('http://localhost:5000/kpi3');
    // const requestFour = axios.get('http://localhost:5000/kpi6');

    // axios.all([requestOne, requestTwo, requestThree, requestFour])
    //   .then(axios.spread((...responses) => {
    //     updateKpi1(responses[0].data);
    //     updateKpi2({
    //       labels: responses[1].data.labels,
    //       series: responses[1].data.series,
    //       currentData: {
    //         labels: responses[1].data.labels.week,
    //         series: responses[1].data.series.map(item => {
    //           return {
    //             name: item.name,
    //             count: item.count.week,
    //             isActive: item.isActive,
    //             Background_Color: item.Background_Color
    //           }
    //         })
    //       }
    //     });
    //     updateKpi3(responses[2].data);
    //     updateKpi6(() => {
    //       const products = responses[3].data[0];
    //       const totalSales = responses[3].data[1];
    //       const productsData = products.map(datum => {
    //         return {
    //           "id": datum.id,
    //           "label": datum.label,
    //           "value": datum.value.today,
    //           "color": datum.color
    //         }
    //       });
    //       const totalSalesData = totalSales.map(datum => {
    //         return {
    //           "id": datum.id,
    //           "label": datum.label,
    //           "value": datum.value.today,
    //           "color": datum.color
    //         }
    //       });
    //       return {
    //         products: responses[3].data[0],
    //         totalSales: responses[3].data[1],
    //         currentData: {
    //           products: productsData,
    //           totalSales: totalSalesData
    //         }
    //       }

    //     });
    //   }))
    //   .catch(errors => console.log(errors));

  }, []);

  function handleKpi6ButtonClick(event) {
    const dataType = event.currentTarget.parentElement.getAttribute('name');
    const name = event.currentTarget.name;
    const newData = kpi6[dataType].map(datum => {
      return {
        "id": datum.id,
        "label": datum.label,
        "value": datum.value[name],
        "color": datum.color
      }
    })
    updateKpi6(prevValue => {
      return {
        products: prevValue.products,
        totalSales: prevValue.totalSales,
        currentData: {
          products: dataType === 'products' ? newData : prevValue.currentData.products,
          totalSales: dataType === 'totalSales' ? newData : prevValue.currentData.totalSales,
        }
      }
    });
  }

  function handleKpi2ButtonClick(event) {
    const timeFrame = event.currentTarget.name;
    updateKpi2(prevValue => {
      return {
        labels: prevValue.labels,
        series: prevValue.series,
        currentData: {
          labels: prevValue.labels[timeFrame],
          series: prevValue.series.map(item => {
            return {
              name: item.name,
              count: item.count[timeFrame],
              isActive: item.isActive,
              Background_Color: item.Background_Color
            }
          })
        }
      }
    })
  }

  return (
    <div>
      <Kpi1 kpi1={kpi1} />
      <Kpi6 handleButtonClick={handleKpi6ButtonClick} currentData={kpi6.currentData} />
      <GridContainer style={{ marginTop: "50px" }}>
        <GridItem xs={12} sm={12} md={12}>
          <Kpi2 handleButtonClick={handleKpi2ButtonClick} data={kpi2.currentData} />
        </GridItem>
        <GridItem xs={12} sm={12} md={6} style={{ marginTop: "3vh" }}>
          <Kpi3 rows={kpi3} />
        </GridItem> */}
      </GridContainer>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import XLSX from 'xlsx';
import FileSaver from "file-saver";

import Checkbox from '@material-ui/core/Checkbox';
import { withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

import TextField from '@material-ui/core/TextField';

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: '#3f51b5',
    color: 'white',
    fontSize: 16,
    paddingTop: 20
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const EditibleTableCell = withStyles(() => ({
  head: {
    backgroundColor: 'orange',
    color: 'white',
    fontSize: 16,
    paddingTop: 20
  },
}))(TableCell);

const StyledTableRow = withStyles(() => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#f5f5f5',
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  buttonGroup: {
    // background: "linear-gradient(45deg, #ea4845, #fea320 70%)",
    padding: "10px",
    color: "white",
    border: "none"
  }
});



export default function TableFromScratch() {
  const classes = useStyles();

  const [data, updateData] = useState({
    originalData: [],
    currentData: [],
    keys: []
  });

  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
    columnName: "",
  });

  const [value, changeValue] = useState(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const fetchInventory = () => {
    axios.get('http://localhost:5000/test/')
      .then(res => updateData({
        originalData: res.data[0],
        currentData: res.data[0],
        keys: res.data[1]
      }))
      .catch(err => console.log(err));

  }

  useEffect(() => {
    fetchInventory();
  }, []);

  // /**
  //  *
  //  * @param id - The id of the product
  //  * @param currentUnitPrice - The current unit price of the product
  //  */
  const onEdit = ({ UPC, columnName }) => {
    setInEditMode({
      status: true,
      rowKey: UPC,
      columnName: columnName
    })
    // setUnitPrice(currentUnitPrice);
  }

  // /**
  //  *
  //  * @param id
  //  * @param newUnitPrice
  //  */
  const updateInventory = ({ UPC, newUnitPrice }) => {
    axios.post('http://localhost:5000/test/', { UPC, newUnitPrice })
      .then(() => {
        onCancel();
        fetchInventory();
      })
      .catch(err => console.log(err));
  }

  // /**
  //  *
  //  * @param id -The id of the product
  //  * @param newUnitPrice - The new unit price of the product
  //  */
  const onSave = ({ UPC, columnName }) => {
    if (value !== null) {
      updateData(prevValue => {
        return {
          originalData: prevValue.originalData,
          keys: prevValue.keys,
          currentData: prevValue.currentData.map(datum => {
            if (datum.UPC === UPC) {
              return {
                ...datum,
                [columnName]: parseFloat(value),
                TotalProductCost: (datum.TotalProductCost * parseFloat(value)).toFixed(2),
                Profit: (datum.Profit * parseFloat(value)).toFixed(2),
                Margin: (datum.Margin * parseFloat(value)).toFixed(2),
                ROI: (datum.ROI * parseFloat(value)).toFixed(2),
                New_Price_Factor: (datum.New_Price_Factor * parseFloat(value)).toFixed(2),
                New_Price: (datum.New_Price * parseFloat(value)).toFixed(2),
                New_Referral_Fee: (datum.New_Referral_Fee * parseFloat(value)).toFixed(2),
                New_Profit: (datum.New_Profit * parseFloat(value)).toFixed(2),
                New_Margin: (datum.New_Margin * parseFloat(value)).toFixed(2),
                New_ROI: (datum.New_ROI * parseFloat(value)).toFixed(2),
                Min_Price: (datum.Min_Price * parseFloat(value)).toFixed(2),
                Max_Price: (datum.Max_Price * parseFloat(value)).toFixed(2)
              }
            } else {
              return datum
            }
          })
        }
      });
    }
    onCancel();
  }

  function keyPress(event, { UPC, columnName }) {
    if (event.key === "Enter") {
      onSave({ UPC, columnName });
      onCancel();
    }
  }

  function onCancel() {
    // reset the inEditMode state value
    setInEditMode({
      status: false,
      rowKey: null,
      columnName: ""
    })
    // reset the unit price state value
    changeValue(null);
  }

  function conditionalStyle(columnName, item, index) {
    return item[columnName] !== data.originalData[index][columnName] ? (item[columnName] > data.originalData[index][columnName] ? { backgroundColor: '#55ae59' } : { backgroundColor: '#ea4845' }) : null
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function exportToExcel() {

    var wb = XLSX.utils.book_new();
    wb.Props = {
      Title: "Ecommerce PML Data",
      Subject: "Ecommerce PML Data",
      Author: "Qualex",
      CreatedDate: new Date()
    };
    wb.SheetNames.push("Ecommerce PML Data");
    var ws_data = data.currentData;  //a row with 2 columns
    var ws = XLSX.utils.json_to_sheet(ws_data);
    wb.Sheets["Ecommerce PML Data"] = ws;
    var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    function s2ab(s) {
      var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
      var view = new Uint8Array(buf);  //create uint8array as viewer
      for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
      return buf;
    }
    // const file = new Blob(([s2ab(wbout)],{type:"application/octet-stream"}), 'test.xlsx');
    const file = new File([s2ab(wbout)], "ecommerce-pml-data.xlsx", { type: "application/octet-stream" });
    FileSaver.saveAs(file);

  }

  return (
    <div className="container">
      <Card style={{paddingLeft: "40px"}}>
        <CardHeader>
          <Grid container spacing={3}>
            <Grid item>
              <Typography variant="h4" style={{ color: "#5c4950" }}>Product Master List</Typography>
            </Grid>
            <Grid item>
              {/* <button onClick={() => exportToExcel()} className={classes.buttonGroup} style={{ backgroundColor: "#ea4845", borderRadius: "5px 0px 0px 5px" }}>
                <Typography>Export to Excel</Typography></button>
              <button className={classes.buttonGroup} style={{ backgroundColor: "#ec5e5b", borderRadius: "0px 5px 5px 0px" }}>
                <Typography>Add to Repricing</Typography></button> */}
              <ButtonGroup color="secondary" variant="outlined" size="large">
                <Button>Export to Excel</Button>
                <Button>Add to Repricing</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </CardHeader>
      </Card>
      <Card style={{padding: "15px"}}>
        <CardHeader>
          <TableContainer style={{ borderRadius: "10px 10px 0px 0px" }}>
            <Table>
              <TableHead >
                <StyledTableRow >
                  <StyledTableCell></StyledTableCell>
                  {data.keys.map(title => title === "PackagingFactor" || title === "Variable_Margin" ?
                    <EditibleTableCell>{title}</EditibleTableCell> : <StyledTableCell>{title}</StyledTableCell>)}
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {
                  data.currentData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((item, index) => (
                      <StyledTableRow key={item.UPC}>
                        <StyledTableCell><Checkbox /></StyledTableCell>
                        <StyledTableCell>{item.UPC}</StyledTableCell>
                        <StyledTableCell>{item.ASIN}</StyledTableCell>
                        <StyledTableCell>{item.SKU}</StyledTableCell>
                        <StyledTableCell>{item.Title}</StyledTableCell>
                        <StyledTableCell>{item.Brand}</StyledTableCell>
                        <StyledTableCell>{item.ProductCost}</StyledTableCell>
                        <StyledTableCell>{item.unitWeight}</StyledTableCell>
                        <StyledTableCell>{item.ShippingCost}</StyledTableCell>
                        <StyledTableCell>{item.ReferralFee}</StyledTableCell>
                        <StyledTableCell onClick={() => onEdit({ UPC: item.UPC, columnName: "PackagingFactor" })}>
                          {
                            inEditMode.status && inEditMode.rowKey === item.UPC && inEditMode.columnName === "PackagingFactor" ? (
                              <div>
                                <TextField value={value} placeholder={item.PackagingFactor}
                                  onChange={(event) => changeValue(event.target.value)}
                                  onKeyPress={(event) => keyPress(event, { UPC: item.UPC, columnName: "PackagingFactor" })}
                                  autoFocus
                                />
                              </div>
                            ) : (
                                item.PackagingFactor
                              )
                          }
                        </StyledTableCell>
                        <StyledTableCell>{item.BuyBoxPrice}</StyledTableCell>
                        <StyledTableCell style={conditionalStyle("TotalProductCost", item, index)}>{item.TotalProductCost}</StyledTableCell>
                        <StyledTableCell style={conditionalStyle("Profit", item, index)}>{item.Profit}</StyledTableCell>
                        <StyledTableCell style={conditionalStyle("Margin", item, index)}>{item.Margin}</StyledTableCell>
                        <StyledTableCell style={conditionalStyle("ROI", item, index)}>{item.ROI}</StyledTableCell>
                        <StyledTableCell onClick={() => onEdit({ UPC: item.UPC, columnName: "Variable_Margin" })}>
                          {
                            inEditMode.status && inEditMode.rowKey === item.UPC && inEditMode.columnName === "Variable_Margin" ? (
                              <div>
                                <TextField value={value} placeholder={item.Variable_Margin}
                                  onChange={(event) => changeValue(event.target.value)}
                                  onKeyPress={(event) => keyPress(event, { UPC: item.UPC, columnName: "Variable_Margin" })}
                                  autoFocus
                                />
                              </div>
                            ) : (
                                item.Variable_Margin
                              )
                          }
                        </StyledTableCell>
                        <StyledTableCell style={conditionalStyle("New_Price_Factor", item, index)}>{item.New_Price_Factor}</StyledTableCell>
                        <StyledTableCell style={conditionalStyle("New_Price", item, index)}>{item.New_Price}</StyledTableCell>
                        <StyledTableCell style={conditionalStyle("New_Referral_Fee", item, index)}>{item.New_Referral_Fee}</StyledTableCell>
                        <StyledTableCell style={conditionalStyle("New_Profit", item, index)}>{item.New_Profit}</StyledTableCell>
                        <StyledTableCell style={conditionalStyle("New_Margin", item, index)}>{item.New_Margin}</StyledTableCell>
                        <StyledTableCell style={conditionalStyle("New_ROI", item, index)}>{item.New_ROI}</StyledTableCell>
                        <StyledTableCell style={conditionalStyle("Min_Price", item, index)}>{item.Min_Price}</StyledTableCell>
                        <StyledTableCell style={conditionalStyle("Max_Price", item, index)}>{item.Max_Price}</StyledTableCell>
                        <StyledTableCell>{item.Match_Buy_Box}</StyledTableCell>
                        <StyledTableCell>{item.Channel}</StyledTableCell>
                        <StyledTableCell>{item.BSR}</StyledTableCell>
                        <StyledTableCell>{item.Quantity}</StyledTableCell>
                        <StyledTableCell>{item.Rating}</StyledTableCell>
                      </StyledTableRow>
                    ))
                }
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.currentData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            style={{ backgroundColor: "#3f51b5", borderRadius: "0px 0px 10px 10px", color: "white" }}
          />
        </CardHeader>
      </Card>
    </div>
  )
}
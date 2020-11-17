import React, { useState } from "react";

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import SearchAppBar from "components/Navbars/SearchBar";
import TablePagination from '@material-ui/core/TablePagination';

const StyledTableCell = withStyles(() => ({
    head: {
        backgroundColor: '#3f51b5',
        color: 'white',
        fontSize: 14,
    },
    body: {
        fontSize: 13,
        padding: "0px",
        textAlign: "center"
    },
}))(TableCell);

// 

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

// 

const useStyles = makeStyles({
    table: {
        minWidth: 100,
    },
    customButton: {
        border: "none",
        backgroundColor: "#ff9801", 
        color: "white",
        borderRadius: "5px",
        padding: "5px"
    }
});

export default function Kpi3(props) {
    const classes = useStyles();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <div>
            <TableContainer component={Paper}>
            <SearchAppBar />
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>SiteOrderID</StyledTableCell>
                            <StyledTableCell align="right">Site</StyledTableCell>
                            <StyledTableCell align="right">DateOrdered</StyledTableCell>
                            <StyledTableCell align="center">Status</StyledTableCell>
                            <StyledTableCell align="center"><button className={classes.customButton}>Post Orders</button></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                            return (
                                <StyledTableRow key={index}>
                                    <StyledTableCell scope="row">{row.siteOrderID}</StyledTableCell>
                                    <StyledTableCell align="right">{row.site}</StyledTableCell>
                                    <StyledTableCell align="right">{row.dateOrdered}</StyledTableCell>
                                    <StyledTableCell align="right">{row.status}</StyledTableCell>
                                    <StyledTableCell align="center"><Checkbox /></StyledTableCell>
                                </StyledTableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={props.rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                style={{backgroundColor: "#3f51b5", borderRadius: "2px", color: "white"}}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            </TableContainer>
        </div>
    );
}
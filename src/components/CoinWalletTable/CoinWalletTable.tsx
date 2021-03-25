import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import {useStyles} from "./style";

function createData(time: string, email: string) {
    return {time, email}
}

const rows = [
    createData('Daily', 'test@mail.com'),
    createData('Daily', 'test@mail.com'),
    createData('Weekly', 'test1@gmail.com'),
    createData('Weekly', 'test1@gmail.com'),
    createData('Weekly', 'test1@gmail.com'),
];

export default function DenseTable() {
    const classes = useStyles()

    return (
        <React.Fragment>
            <TableContainer component={Paper} elevation={0}>
                <Table className={classes.table} size="small" aria-label="a dense table">

                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Freauency</TableCell>
                            <TableCell align="center">Email</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={`${row.email}_${index}`}>
                                <TableCell align="center" component="th" scope="row">
                                    {row.time}
                                </TableCell>
                                <TableCell align="center">
                                    {row.email}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>

            <div className={classes.buttonWrap}>
                <Button variant="contained"
                        type="submit"
                        className={classes.button}
                >
                    Delete
                </Button>
            </div>
        </React.Fragment>
    );
}
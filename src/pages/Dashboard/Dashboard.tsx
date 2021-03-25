import React from "react";
import Paper from "@material-ui/core/Paper";
import DataPicker from "../../components/DataPicker/DataPicker";
import CoinsTable from "../../components/Table/Table";
import {useStyles} from "./sytle";

const Dashboard: React.FC = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Paper className={classes.paper} elevation={0}>
                <DataPicker/>
                <CoinsTable/>
            </Paper>
        </React.Fragment>
    )
}
export default Dashboard
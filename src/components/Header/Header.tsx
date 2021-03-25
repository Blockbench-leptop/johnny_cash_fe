import React from "react";
import Paper from "@material-ui/core/Paper";
import logo from "../../assets/img/fox.svg";
import {useStyles} from "./style";

const Header: React.FC = () => {
    const classes = useStyles()
    return (
        <React.Fragment>
            <Paper className={classes.header} elevation={0}>
                <img src={logo} alt="logo"/>
                <span>Coin Wallet</span>
            </Paper>
        </React.Fragment>
    )
}
export default Header
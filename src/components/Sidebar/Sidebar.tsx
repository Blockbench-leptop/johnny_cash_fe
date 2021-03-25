import React from "react";
import Paper from "@material-ui/core/Paper";
import {BorderColor, ExitToApp} from "@material-ui/icons";
import {Link, useHistory} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {useStyles} from "./sytle";
import {WinStorage} from "../../services/AuthSrorage";


const Sidebar: React.FC = () => {
    const classes = useStyles()

    const history = useHistory()

    const logOut = () => {
        WinStorage.logout()
        history.push('/signin')
    }

    return (
        <React.Fragment>
            <Paper className={classes.sidebar} elevation={0}>

                <div className={classes.linkWrap}>
                        <BorderColor className={classes.icon}/>
                    <Link to='/dashboard' >
                        Dashboard
                    </Link>
                </div>

                <div className={classes.linkWrap}>
                        <BorderColor className={classes.icon}/>
                    <Link to='/csv' >
                        CSV by Email
                    </Link>
                </div>

                <div className={classes.linkWrap}>
                    <BorderColor className={classes.icon}/>
                        <Link to='/threshold' >
                            Threshold & Time delay
                        </Link>
                </div>

            </Paper>

            <Paper elevation={0}>
                <Button
                    color="inherit"
                    className={classes.button}
                    startIcon={<ExitToApp />}
                    onClick={logOut}
                >
                    Log Out
                </Button>
            </Paper>

        </React.Fragment>
    )
}
export default Sidebar
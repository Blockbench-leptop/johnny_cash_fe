import React from 'react';

import Grid from '@material-ui/core/Grid';

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

import {useStyles} from './style'
import {Paper} from "@material-ui/core";

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    const classes = useStyles();

    return (
        <div className={classes.home}>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Header/>
                </Grid>

                <Grid item xs={2}>
                    <Sidebar/>
                </Grid>

                <Grid item xs={10}>
                    <Paper className={classes.childrenWrap}>
                        {children}
                    </Paper>
                </Grid>
            </Grid>

        </div>
    );
}
export default Layout



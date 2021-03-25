import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'absolute',
            left: '50%',
            top: '50%',
        },
        preloader: {
            fontSize: '50px'
        }
    }),
);

const Preloader: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress className={classes.preloader}/>
        </div>
    );
}
export default Preloader

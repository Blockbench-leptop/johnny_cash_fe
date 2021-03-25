import React from "react";

import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import {useStyles} from "./style";


const options = ['24h', '48h', 'Week', 'Month']

const Threshold: React.FC = () => {
    const classes = useStyles()

    const [time, setTime] = React.useState<string | null>(options[0])
    const [inputValueTime, setInputValueTime] = React.useState('')

    return (
        <React.Fragment>
            <Grid container justify="flex-start">

                <Paper className={classes.paper} elevation={0}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Threshold" variant="outlined" />
                    </form>
                </Paper>

                <Paper className={classes.paper} elevation={0}>
                    <Button variant="contained" type="submit" className={classes.button}>
                        Edit
                    </Button>
                </Paper>
                <Paper className={classes.paper} elevation={0}>
                    <Button variant="contained" type="submit" className={classes.button}>
                        Apply
                    </Button>
                </Paper>
            </Grid>

            <Grid container>
                <Paper className={classes.paper} elevation={0}>

                    <Autocomplete
                        value={time}
                        onChange={(event: any, newValue: string | null) => {
                            setTime(newValue);
                        }}
                        inputValue={inputValueTime}
                        onInputChange={(event, newInputValue) => {
                            setInputValueTime(newInputValue);
                        }}
                        id="controllable-time"
                        options={options}
                        style={{width: 300}}
                        renderInput={(params) => <TextField {...params} variant="outlined"/>}
                    />
                </Paper>

                <Paper className={classes.paper} elevation={0}>
                    <Button variant="contained" type="submit" className={classes.button}>
                        Edit
                    </Button>
                </Paper>

                <Paper className={classes.paper} elevation={0}>
                    <Button variant="contained" type="submit" className={classes.button}>
                        Apply
                    </Button>
                </Paper>
            </Grid>
        </React.Fragment>
    )
}
export default Threshold
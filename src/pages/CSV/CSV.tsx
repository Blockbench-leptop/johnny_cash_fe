import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import EnhancedTable from "../../components/CoinWalletTable/CoinWalletTable";
import {useStyles} from "./style";

const options = ['Daily', 'Weekly', 'Monthly'];
const options2 = ['test@gmail.com', 'test2@gmail.com', 'test2@gmail.com'];

const CSV: React.FC = () => {
    const classes = useStyles()
    const [time, setTime] = React.useState<string | null>(options[0])
    const [email, setEmail] = React.useState<string | null>(options2[0])
    const [inputValueTime, setInputValueTime] = React.useState('')
    const [inputValueEmail, setInputValueEmail] = React.useState('')

    return (
        <React.Fragment>
            <Grid container justify="flex-start">
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
                    <Autocomplete
                        value={email}
                        onChange={(event: any, newValue: string | null) => {
                            setEmail(newValue);
                        }}
                        inputValue={inputValueEmail}
                        onInputChange={(event, newInputValue) => {
                            setInputValueEmail(newInputValue);
                        }}
                        id="controllable-email"
                        options={options2}
                        style={{width: 300}}
                        renderInput={(params) => <TextField {...params} variant="outlined"/>}
                    />
                </Paper>

                <Paper className={classes.paper} elevation={0}>
                    <Button variant="contained" type="submit" className={classes.button}>
                        Apply
                    </Button>
                </Paper>
            </Grid>

            <Grid container>
                <EnhancedTable/>
            </Grid>
        </React.Fragment>
    )
}
export default CSV
import React from "react";
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import Button from "@material-ui/core/Button";
import {useStyles} from "./style";

const DataPicker: React.FC = () => {
    const classes = useStyles()

    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    )

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date)
    }

    return (
        <React.Fragment>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>

                <Grid container justify="flex-start">
                    <KeyboardDatePicker
                        id="date-picker-dialog"
                        label="From:"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />

                    <KeyboardDatePicker
                        id="date-picker-dialog"
                        label="To:"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />

                    <Button variant="contained"
                            type="submit"
                            className={classes.button}
                    >
                        Apply
                    </Button>

                </Grid>
            </MuiPickersUtilsProvider>
        </React.Fragment>
    )
}
export default DataPicker
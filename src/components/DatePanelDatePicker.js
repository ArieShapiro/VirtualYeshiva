import 'date-fns';
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Button from '@material-ui/core/Button';

const DatePanelDatePicker = ({ date, goToDate }) => {
    const [selectedDate, setSelectedDate] = useState(date.greg);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                align="center"
                margin="normal"
                id="date-picker-dialog"
                label="Select Date"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
            <Button
                onClick={() => { goToDate(selectedDate) }}
                variant="contained"
                color="primary"
                href="#contained-buttons">
                GO
            </Button>
        </MuiPickersUtilsProvider>
    );
}

export default DatePanelDatePicker

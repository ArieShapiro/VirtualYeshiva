import 'date-fns';
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

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
            <button onClick={() => { goToDate(selectedDate) }}>GO</button>
        </MuiPickersUtilsProvider>
    );
}

export default DatePanelDatePicker

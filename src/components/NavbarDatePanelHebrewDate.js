import React, { useContext } from 'react'
import { DateContext } from '../contexts/DateContext'
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const DatePanelHebrewDate = ({ handleOpen }) => {
    const { date, dispatch } = useContext(DateContext)
    const goToDate = (arg) => {
        let d = date.greg
        d = new Date(d.setDate(d.getDate() + arg))
        dispatch({
            type: 'GO_TO_DATE',
            date: d
        })
    }
    console.log(date.greg)
    return (
        <div>
            <Typography variant="h6" align="justify" >
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Button onClick={() => { goToDate(-1) }}>
                        <ArrowBackIosIcon style={{ fill: "white" }} />
                    </Button>
                    <div onClick={handleOpen}>
                        {getDayOfTheWeek(date.greg.getDay())}, {date.hebrew.date} {date.hebrew.month_name}, {date.hebrew.year}
                    </div>
                    <Button onClick={() => { goToDate(+1) }}>
                        <ArrowForwardIosIcon style={{ fill: "white" }} />
                    </Button>
                </Grid>
            </Typography>
        </div>
    );
}

export default DatePanelHebrewDate;

const getDayOfTheWeek = (num) => {
    switch (num) {
        case 0:
            return 'Sun'
        case 1:
            return 'Mon'
        case 2:
            return 'Tue'
        case 3:
            return 'Wed'
        case 4:
            return 'Thu'
        case 5:
            return 'Fri'
        case 6:
            return 'Sat'
    }
}
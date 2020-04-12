import React, { useContext } from 'react'
import { DateContext } from '../contexts/DateContext'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(0),
            width: '0'
        },
    },
}));

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
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h6">
                <Grid
                    container
                    direction="row"
                    alignContent="stretch"
                    alignItems="center"
                >
                    <IconButton
                        onClick={() => { goToDate(-1) }}
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu">
                        <NavigateBeforeIcon style={{ fill: "white" }} />
                    </IconButton>
                    <div onClick={handleOpen} style={{ fontSize: '0.8em' }}>
                        {getDayOfTheWeek(date.greg.getDay())}, {date.hebrew.date} {date.hebrew.month_name}, {date.hebrew.year}
                    </div>
                    <IconButton
                        onClick={() => { goToDate(+1) }}
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu">
                        <NavigateNextIcon style={{ fill: "white", marginLeft: '8px' }} />
                    </IconButton>
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
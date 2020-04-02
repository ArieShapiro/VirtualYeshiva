import React, { useState, useContext } from 'react';
import { DateContext } from '../contexts/DateContext'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import DatePanelHebrewDate from './DatePanelHebrewDate'
import DatePanelDatePicker from './DatePanelDatePicker'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 200,
        height: 90,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const DatePanel = () => {
    const { date, dispatch } = useContext(DateContext)
    const [open, setOpen] = useState(false);

    const goToDate = (date) => {
        dispatch({
            type: 'GO_TO_DATE',
            date
        })
        handleClose()
    }
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();

    return (
        <div>
            <DatePanelHebrewDate handleOpen={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <Grid
                        container
                        direction="row"
                        align="center"
                    >
                        <DatePanelDatePicker date={date} goToDate={goToDate} />
                    </Grid>
                </div>
            </Modal>
        </div>
    );
}

export default DatePanel

const modalStyle = {
    top: '25vh',
    left: '18vw'
}



import React, { useContext } from 'react';
import { ShiurimContext } from '../contexts/ShiurimContext'
import { DateContext } from '../contexts/DateContext'
import ShiurDetails from './ShiurDetails';
import Chip from '@material-ui/core/Chip'
import Box from '@material-ui/core/Box'


const ShiurimList = () => {
    const { date, dispatch } = useContext(DateContext)
    const { shiurim } = useContext(ShiurimContext)
    const shiurimToDisplay = (shiurim.filter(shiur => {
        return shiur.date.getDate() === date.greg.getDate()
    })).map(shiur => {
        return <ShiurDetails details={shiur} key={shiur.id} />
    })

    return (
        <div>
            <Box my={1.5}>
                <a href="https://zoom.us/j/621516973" style={anchorStyle} target="_blank">
                    <Chip
                        variant="outlined"
                        size="small"
                        label="https://zoom.us/j/621516973"
                        clickable
                        color="primary"
                    />
                </a>
            </Box>
            {shiurimToDisplay.length ? shiurimToDisplay : <h3>No Shiurim Scheduled for this date</h3>}
        </div>
    );
}

export default ShiurimList;

const anchorStyle = {
    textDecoration: 'inherit',
    color: 'inherit',
}


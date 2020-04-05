import React, { useContext } from 'react';
import { ShiurimContext } from '../contexts/ShiurimContext'
import { DateContext } from '../contexts/DateContext'
import ShiurDetails from './ShiurDetails';
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar';
import DoneIcon from '@material-ui/icons/Done'
import VideocamIcon from '@material-ui/icons/Videocam';
import Box from '@material-ui/core/Box'


const ShiurimList = () => {
    const { date, dispatch } = useContext(DateContext)
    const { shiurim } = useContext(ShiurimContext)

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

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
            {(shiurim.filter(shiur => {
                return shiur.date.getDate() === date.greg.getDate()
            })).map(shiur => {
                return <ShiurDetails details={shiur} />
            })}
        </div>
    );
}

export default ShiurimList;

const anchorStyle = {
    textDecoration: 'inherit',
    color: 'inherit',
    // margin:'30px'
}


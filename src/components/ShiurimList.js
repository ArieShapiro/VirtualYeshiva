import React, { useContext } from 'react';
import { ShiurimContext } from '../contexts/ShiurimContext'
import { DateContext } from '../contexts/DateContext'
import ShiurDetails from './ShiurDetails';

const ShiurimList = () => {
    const { date, dispatch } = useContext(DateContext)
    const { shiurim } = useContext(ShiurimContext)

    return (
        <div>
            {(shiurim.filter(shiur => {
                return shiur.date.getDate() === date.greg.getDate()
            })).map(shiur => {
                return <ShiurDetails details={shiur} />
            })}
        </div>
    );
}

export default ShiurimList;


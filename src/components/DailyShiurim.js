import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import buildingConstruction from '@iconify/icons-noto/building-construction';


const DailyShiurim = () => {
    return (
        <div>
            <Icon icon={buildingConstruction} style={styles} />
            <h2>
                Daily Shiurim coming soon...
            </h2>

        </div>
    );
}

export default DailyShiurim

const styles = {
    fontSize: '7em',
    marginTop:'35px'

}
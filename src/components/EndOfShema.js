import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import buildingConstruction from '@iconify/icons-noto/building-construction';


const EndOfShema = () => {
    return (
        <div>
            <Icon icon={buildingConstruction} style={styles} />
            <h2>
                End Of Shema coming soon...
            </h2>

        </div>
    );
}
 
export default EndOfShema;

const styles = {
    fontSize: '7em',
    marginTop:'35px'

}
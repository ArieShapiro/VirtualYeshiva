import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import buildingConstruction from '@iconify/icons-noto/building-construction';


const Donate = () => {
    return (
        <div>
            <Icon icon={buildingConstruction} style={styles} />
            <h2>
                Donate coming soon...
            </h2>

        </div>
    );
}
 
export default Donate;

const styles = {
    fontSize: '7em',
    marginTop:'35px'

}
import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import buildingConstruction from '@iconify/icons-noto/building-construction';


const Contact = () => {
    return (
        <div>
            <Icon icon={buildingConstruction} style={styles} />
            <h2>
                Contact coming soon...
            </h2>

        </div>
    );
}
 
export default Contact;

const styles = {
    fontSize: '7em',
    marginTop:'35px'

}
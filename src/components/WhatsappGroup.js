import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import buildingConstruction from '@iconify/icons-noto/building-construction';


const WhatsappGroup = () => {
    return (
        <div>
            <Icon icon={buildingConstruction} style={styles} />
            <h2>
                Join Whatsapp group...
            </h2>

        </div>
    );
}
 
export default WhatsappGroup;

const styles = {
    fontSize: '7em',
    marginTop:'35px'

}
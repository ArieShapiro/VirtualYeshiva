import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import buildingConstruction from '@iconify/icons-noto/building-construction';

const Chat = () => {
    return (
        <div>
            <Icon icon={buildingConstruction} style={styles} />
            <h2>
                Chat coming soon...
            </h2>

        </div>
    );
}

export default Chat

const styles = {
    fontSize: '7em',
    marginTop:'35px'

}
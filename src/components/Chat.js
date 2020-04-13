import React from 'react'
import './Chat.css'
import { Icon, InlineIcon } from '@iconify/react';
import buildingConstruction from '@iconify/icons-noto/building-construction';

const Chat = () => {
    return (
        <div id="mario-chat">
            <div id="chat-window">
                <Icon icon={buildingConstruction} style={styles} />
                <div id="output"></div>
                <div id="feedback"></div>
            </div>
            <input type="text" id="handle" placeholder="NickName" />
            <input id="message" type="text" placeholder="message" />
            <button id="send">Send</button>
        </div>
    );
}

export default Chat

const styles = {
    fontSize: '7em',
    marginTop: '35px'

}
import React, { useState } from 'react'
import io from 'socket.io-client'

const port = process.env.PORT || 8080
const socket = io.connect(`http://localhost:${port}`)

const Chat = () => {
    const [nickname, setNickname] = useState('')
    const [message, setMessage] = useState('')
    const [output, setOutput] = useState('')
    const [feedback, setFeedback] = useState('')

    const nahdleSubmit = e => {
        e.preventDefault()
        socket.emit('chat', {
            nickname: nickname,
            message: message
        })
        setMessage('')
    }

    socket.on('chat', data => {
        console.log(data.nickname)
        let outputData = data.nickname + ':  ' + data.message
        setOutput(output + outputData)
    })
    return (
        <div>
            <div>
                <div>

                    {output}

                </div>

                <div>

                    {feedback}

                </div>

            </div>

            <form onSubmit={nahdleSubmit}>
                <input type="text" value={nickname} onChange={e => setNickname(e.target.value)} placeholder="NickName" />
                <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="message" />
                <input type="submit" value="Send" />
            </form>

        </div>
    );
}

export default Chat

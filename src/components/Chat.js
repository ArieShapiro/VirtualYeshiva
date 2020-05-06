import React, { useState } from "react";
import io from "socket.io-client";

// const BASE_URL =
//       process.env.NODE_ENV !== "development"
//         ? "/jobs"
//         : "http://localhost:8000/jobs";
//     axios.get(`${BASE_URL}`).then

const port = process.env.PORT || 8080;
const BASE_URL =
  process.env.NODE_ENV !== "development" ? "/" : "http://localhost:8080";
const socket = io.connect(BASE_URL);

const Chat = () => {
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [output, setOutput] = useState([]);
  const [feedback, setFeedback] = useState("");

  const nahdleSubmit = (e) => {
    e.preventDefault();
    socket.emit("chat", {
      nickname: nickname,
      message: message,
    });
    setMessage("");
  };

  socket.on("chat", (data) => {
    let outputData = data.nickname + ":  " + data.message;
    setOutput([...output, outputData]);
  });
  return (
    <div>
      <div>
        <div>
          <h2>Under construction.. Not ready yet</h2>

          {output.map((line) => {
            return <h4>{line}</h4>;
          })}
        </div>

        <div>{feedback}</div>
      </div>

      <form onSubmit={nahdleSubmit}>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="NickName"
        />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message"
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Chat;

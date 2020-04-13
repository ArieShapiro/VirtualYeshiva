const express = require('express');
const app = express();
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const socket = require('socket.io')

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(port, () => {
  console.log('Listening on port: ' + port + '...')
})

// let io = socket(app)
// io.on('connection', socket => {
//   console.log('Made Socket connection', socket.id)

//   socket.on('chat', data => {
//     io.sockets.emit('chat', data)
//   })
//   socket.on('typing', data => {
//     socket.broadcast.emit('typing', data)
//   })
// })
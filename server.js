const express = require('express');
const app = express();
const path = require('path');
const socket = require('socket.io')
const favicon = require('express-favicon');
const port = process.env.PORT || 8080;

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

const server = app.listen(port, () => {
  console.log('Listening on port: ' + port + '...')
})

let io = socket(server)
io.on('connection', socket => {
  console.log('Made Socket connection', socket.id)

  socket.on('chat', data => {
    console.log('***' + data)
    io.sockets.emit('chat', data)
  })
  socket.on('typing', data => {
    socket.broadcast.emit('typing', data)
  })
})
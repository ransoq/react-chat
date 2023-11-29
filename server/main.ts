const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketIo = require("socket.io");

const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});

const PORT = 3001;

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
    console.log('➕ New user connected!');
    socket.on('connect', () => {
        console.log('➕ User connected!');
    });
    socket.on('disconnect', () => {
        console.log('😔 User disconnected!');
    });

    socket.on('message', (msg) => {
        console.log('msg :>> ', msg);

        io.emit('message', msg);
    })
});

server.listen(PORT, () => {
  console.log(`🚀 Server listening on [PORT] - ${PORT}`);
});
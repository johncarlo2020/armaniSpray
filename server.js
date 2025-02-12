const WebSocket = require('ws');

// const server = new WebSocket.Server({ port: 8080, host:'192.168.1.101'});
const server = new WebSocket.Server({ port: 8080, host:'127.0.0.1'});





server.on('connection', (socket) => {
    console.log('A new client connected');

    socket.on('message', (message) => {
        console.log(`Received: ${message}`);
        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    socket.on('close', () => {
        console.log('A client disconnected');
    });
});

console.log('WebSocket server is running on ws://192.168.0.176:8080');

module.exports = function (server) {
    const io = require('socket.io');

    var sockets = io.listen(server);

    sockets.on('connection', function (socket) {
        console.log('Nuevo cliente conectado');
        socket.on('client-message', function (data) {
            sockets.emit('server-message', data);
        });

    });
};
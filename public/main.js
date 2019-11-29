$(function () {
    // socket iniciado

    var socket = io();

    var message = $('#chat-message');
    var chat = $('#chat');

    message.focus();

    $('#message-box').submit(function(e){
        e.preventDefault();
        socket.emit('client-message', message.val());
        message.val('');

    });

    socket.on('server-message', function(data) {
        chat.append(data + '<br>');
    });
});

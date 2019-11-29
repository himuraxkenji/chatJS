const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);
const morgan = require('morgan')

// Configuracion servidor
app.set('port', 3000);
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

// Inicializacion del servidor
server.listen(app.get('port'), ()=>{
    console.log('Servidor iniciado');
});

// Logica sockets
require('./sockets')(server);
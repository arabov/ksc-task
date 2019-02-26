import config from '../config';
import http from 'http';
import socketio from 'socket.io';
import Redis from 'ioredis';
import app from './app';
import socket_handler from './socket';

const env = process.env.NODE_ENV || 'development'
    , port = process.env.PORT || 80
    , db = config[env].redis
;

export let server = http.createServer(app)
    , redis = new Redis(db)
    , socket = socketio(server)
;

server.listen(port, () => {
    console.log('Listening on ' + port);
});

redis.on('connect', () => {
    console.log('Redis connected');
});

socket.on('connection', socket_handler);

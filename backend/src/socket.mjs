import { redis, socket as sockets } from './index';
import helpers from './helpers';

export default (socket) => {
    console.log('Socket client connected');

    socket.on('login', async (object) => {
        const date = Date.now();

        await redis.hset('logs', [date, 'login']);

        let logs = await redis.hgetall('logs')
            , data = await redis.hgetall('data')
        ;

        sockets.emit('update_all', { logs: helpers.convertLogs(logs), data: helpers.convertData(data) });
    });

    socket.on('data', async (object) => {
        const date = Date.now();

        await redis.hset('logs', [date, 'dataAdded']);
        await redis.hset('data', [date, JSON.stringify(object)]);

        let logs = await redis.hgetall('logs')
            , data = await redis.hgetall('data')
        ;

        sockets.emit('update_all', { logs: helpers.convertLogs(logs), data: helpers.convertData(data) });
    });

};


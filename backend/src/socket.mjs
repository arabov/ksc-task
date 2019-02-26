import { redis, socket as sockets } from './index';

const convertLogs = (logs) => Object.keys(logs).map((key) => ({ event: logs[key], date: +key }))
    , convertData = (data) => Object.keys(data).map((key) => JSON.parse(data[key]));

export default (socket) => {
    console.log('Socket client connected');

    socket.on('login', async (object) => {
        const date = Date.now();

        await redis.hset('logs', [date, 'login']);

        let logs = await redis.hgetall('logs')
            , data = await redis.hgetall('data')
        ;

        sockets.emit('update_all', { logs: convertLogs(logs), data: convertData(data) });
    });

    socket.on('data', async (object) => {
        const date = Date.now();

        await redis.hset('logs', [date, 'dataAdded']);
        await redis.hset('data', [date, JSON.stringify(object)]);

        let logs = await redis.hgetall('logs')
            , data = await redis.hgetall('data')
        ;

        sockets.emit('update_all', { logs: convertLogs(logs), data: convertData(data) });
    });

};


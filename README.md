# ksc-task

App stack: [Vue.js](https://vuejs.org), [Express](https://expressjs.com), [Socket.IO](https://socket.io), [Redis](https://redis.io).

## Dependencies

App needs: [Node.js](https://nodejs.org/en/), [Redis](https://redis.io).


## Configurating

[backend/config.json](backend/config.json) - to change Redis url

[frontend/config.json](frontend/config.json) - to change backend url


### Run development mode 

In frontend directory
```bash
npm install
npm run serve
```

In backend directory
```bash
npm install
npm run dev
```
Open `http://localhost:8080` in your browser


### Run production mode

Run `run.sh` or

In frontend directory
```bash
npm install
npm run build
```

In backend directory
```bash
npm install
npm run prod
```
Open `http://localhost:1111` in your browser


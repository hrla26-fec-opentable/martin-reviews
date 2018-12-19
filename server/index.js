/* eslint-disable no-console */
const app = require('./app.js');
const http = require('http');

const server = http.createServer(app);
const PORT = process.env.PORT || 9001;

server.listen(PORT, () => {
  console.log('Listening on PORT: ', PORT);
});

server.on('error', (err) => {
  console.error(err);
});

const DBL = require('dblapi.js');
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
const dbl = new DBL(yourDBLTokenHere, { webhookAuth: 'password', webhookServer: server });
//https://discordapp.com/api/webhooks/700443324418359416/t9YttM2_tDrTzcX7WGUVTeJaYlJXZmESDsiu34JF9h2vwq-CTnPRtbhgpU9f4fNTTjmR
dbl.webhook.on('ready', hook => {
  console.log(`Webhook running with path ${hook.path}`);
});
dbl.webhook.on('vote', vote => {
  console.log(`User with ID ${vote.user} just voted!`);
});

app.get('/', (req, res) => {
  // ...
});

server.listen(5000, () => {
  console.log('Listening');
});
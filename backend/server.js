const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: { origin: '*' }
});

app.use(cors());
app.use(express.json());

let rankings = [];
let medals = {};

app.post('/update-ranking', (req, res) => {
  const data = req.body;
  rankings.push(data);
  rankings = rankings.slice(-10);
  io.emit('ranking_update', data);
  res.send({ status: 'Ranking updated' });
});

app.post('/update-medals', (req, res) => {
  const { country, type } = req.body;
  if (!medals[country]) medals[country] = { gold: 0, silver: 0, bronze: 0 };
  medals[country][type]++;
  io.emit('medals_update', { country, medals: medals[country] });
  res.send({ status: 'Medals updated' });
});

server.listen(3001, () => console.log('Backend running on http://localhost:3001'));

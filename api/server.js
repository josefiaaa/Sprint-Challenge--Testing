const express = require('express');
const helmet = require('helmet');
const gameRouter = require('../games/game-router')

const server = express();

server.use(helmet());
server.use(express.json());


server.get('/', (req, res) => {
    res.status(200).json({ hello: 'world' })
})

server.use('/games', gameRouter);

module.exports = server;
const express = require('express');
const commands = require('./controller/CommandsController')

const routes = express.Router();


routes.get('/commands', commands.index)
routes.post('/commands', commands.store)
routes.put('/commands/:IdCommand', commands.update)
routes.delete('/commands/:IdCommand', commands.delete)



routes.get('/online', (req, res) => {
    res.status(200).send('<h> WELCOME API!!! V 1.6  (C) MICKS 2021-2022 </h>')});


module.exports = routes;



const express = require('express');
const commands = require('./controller/CommandsController')
const typeCommand = require('./controller/TypeCommandsController')
const UserController = require('./controller/UserController');
const authMiddleware = require('./middlewares/auth');
const isBody = require('./controller/checkBody')

const routes = express.Router();

/*ROTA DE COMANDO DA API*/
routes.get('/commands', commands.index)
routes.post('/commands',isBody, commands.store)
routes.put('/commands/:IdCommand',isBody, commands.update)
routes.delete('/commands/:IdCommand', commands.delete)

/*ROTA DE COMANDO DA API*/
routes.get('/type', typeCommand.index)
routes.post('/type',isBody, typeCommand.store)
routes.put('/type/:Idtype',isBody, typeCommand.update)
routes.delete('/type/:Idtype', typeCommand.delete)

/*ROTA DE LOGIN DA API*/
routes.get('/users', authMiddleware, UserController.index);
routes.post('/users',isBody,UserController.store);
routes.put('/users/:user_id',isBody, authMiddleware, UserController.update);
routes.delete('/users/:user_id',authMiddleware, UserController.delete);
routes.post('/users/login', UserController.login);


routes.get('/online', (req, res) => {
    res.status(200).send('<h> WELCOME API!!! V 1.6  (C) MICKS 2021-2022 </h>')});


module.exports = routes;



const express = require('express');
const commands = require('./controller/CommandsController')
const commandsAdvanced = require('./controller/CommandsAdvancedController')
const typeCommand = require('./controller/TypeCommandsController')
const UserController = require('./controller/UserController');
const UserPublicController = require('./controller/UserPublicController');
const CoupomController = require('./controller/CouponController');
const authMiddleware = require('./middlewares/auth');
const isBody = require('./controller/checkBody')

const routes = express.Router();

/*ROTA DE COMANDO DA API*/
routes.get('/commands',authMiddleware, commands.index)
routes.post('/commands',authMiddleware,isBody, commands.store)
routes.put('/commands/:IdCommand',authMiddleware,isBody, commands.update)
routes.delete('/commands/:IdCommand',authMiddleware,commands.delete)

/*BUSCA AVANCADAS DE COMANDOS*/
routes.get('/commands/search/:type',authMiddleware,commandsAdvanced.searchAllType)


/*ROTA DE TIPO DA API*/
routes.get('/type',authMiddleware, typeCommand.index)
routes.post('/type',authMiddleware,isBody, typeCommand.store)
routes.put('/type/:Idtype',authMiddleware,isBody, typeCommand.update)
routes.delete('/type/:Idtype',authMiddleware, typeCommand.delete)


/*ROTA DE CUPOM DA API*/
routes.get('/coupon',authMiddleware, CoupomController.index)
routes.post('/coupon',isBody, CoupomController.store)
routes.delete('/coupon/:IdCoupon', CoupomController.delete)

/*ROTA DE LOGIN DA API*/
routes.post('/users/login', UserController.login);
routes.post('/users',isBody,UserController.store);
/*ROTA DE MATER USER DA API*/
routes.get('/users', authMiddleware, UserController.index);
routes.get('/users/:user_id', authMiddleware, UserController.indexID);
routes.put('/users/:user_id',isBody, authMiddleware, UserController.update);
routes.delete('/users/:user_id',authMiddleware, UserController.delete);


/*ROTA CRIAR LOGIN COM CUPON*/
routes.post('/users/coupon',isBody,UserPublicController.store);





routes.get('/online', (req, res) => {
    res.status(200).send('<h> WELCOME API!!! V 1.6  (C) MICKS 2021-2022 </h>')});


module.exports = routes;



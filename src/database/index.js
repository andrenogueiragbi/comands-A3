const Sequilize = require("sequelize")
const dbConfig = require('../config/database')

const User = require('../modal/User')
const Commands = require('../modal/Commands')



//iniciando as a conexão do banco de dados
const connection = new Sequilize(dbConfig)


User.init(connection);
Commands.init(connection);


module.exports = connection
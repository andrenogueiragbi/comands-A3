const TypesCommands = require('../modal/TypesCommand');
const User = require('../modal/User');


var typeStart = [
    "Linux",
    "GitHub",
    "Mysql",
    "Windows",
    "Docker",
    "Rede",
    "Linguagens",
    "Outros"
]


module.exports = {


    async ckeckType() {

        if ((await TypesCommands.findAll()).length == 0) {

            for (var name of typeStart) {
                console.log(`Insert data type ${name}`)
                await TypesCommands.create({ name })

            }

        }
        return true


    },
    async ckeckUser() {

        if ((await User.findAll()).length == 0) {
            console.log(`Insert data user debug`)
            await User.create({ name: "debug", password: "debug", email: "debug@debug", level: 2, company: "debug" })

        }
        return true
    }

}



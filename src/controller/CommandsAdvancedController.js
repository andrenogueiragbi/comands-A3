const Commands = require('../modal/Commands');
const TypesCommands = require('../modal/TypesCommand');

module.exports = {

    async searchAllType(req, res) {
        const { type } = req.params;

        console.log(type)


/*         const commands = await TypesCommands.findAll({include: {model: Commands}})
     


        return res.status(200).send({
            erro: false,
            tipo: commands
        });
 */

        

        if (type) {

            id = 1

            try {
                const commands = await Commands.sequelize.query(
                    `SELECT 
                        * 
                    from commands c 
                    JOIN types_commands tc on c.type_id = tc.id
                    where tc.name = '${type}';`

                )

                return res.status(200).send({
                    erro: false,
                    commands,
                });


            } catch (e) {
                return res.status(500).send({
                    erro: true,
                    message: e,

                });
            }

        } else {

            return res.status(400).send({
                erro: true,
                message: "id type is requeried",
            })

        }

    }

};
const Commands = require('../modal/Commands');

module.exports = {
    async index(req, res) {

        try {

            const commands = await Commands.findAll();

            if (commands.length == 0) {
                return res.status(404).send({
                    erro: true,
                    message: 'Command list is empty'
                });
            }

            return res.status(200).send({
                erro: false,
                commands
            });

        } catch (e) {

            return res.status(500).send({
                erro: true,
                message: 'The server failed',
            });
        }

    },

    async store(req, res) {


        const { 
            title,
            description,
            commands,
            tags,
            creator,
            type_id } = req.body;

        if ( title && description && commands && tags && creator && type_id) {

            try {

                duplicidade = await Commands.findOne({ where: { commands: commands } })


                if (duplicidade && duplicidade.dataValues.type_id === type_id) {
                    return res.status(400).send({
                        erro: true,
                        message: 'commands already exists',

                    });
                }

                const commandsNew = await Commands.create({ title, description, commands, tags, creator,type_id });

                return res.status(200).send({
                    erro: false,
                    message: 'commands created success',
                    commandsNew
                })


            } catch (e) {
                return res.status(500).send({
                    erro: true,
                    message: 'The server failed',
                });
            }

        } else {

            return res.status(400).send({
                erro: true,
                message: "type_id, title,description, commands, tags and creator is requeried",
            })

        }
    },

    async update(req, res) {

        const { IdCommand } = req.params;
        const { type_id, title, description, commands, tags, creator } = req.body;

        if (IdCommand && type_id && title && description && commands && tags && creator) {

            try {
                const userExist = await Commands.findByPk(IdCommand);

                if (!userExist) {
                    return res.status(404).send({
                        erro: true,
                        message: 'command not found for update'
                    });

                }


                duplicidade = await Commands.findOne({ where: { commands: commands } })


                if (duplicidade && duplicidade.dataValues.type_id === type_id) {
                    return res.status(400).send({
                        erro: true,
                        message: 'commands already exists',

                    });
                }

    

                await Commands.update({ type_id, title, description, commands, tags, creator }, {
                    where: {
                        id: IdCommand,
                    }
                });

                return res.status(200).send({
                    erro: false,
                    message: "Commands update with success"
                });

            } catch (e) {
                return res.status(500).send({
                    erro: true,
                    message: "The server failed",
                });

            }


        } else {
            return res.status(400).send({
                erro: true,
                message: "id command, type_id, title, description commands,tags ,creator , is requeried",
            })
        }

    },

    async delete(req, res) {
        const { IdCommand } = req.params;


        if (IdCommand) {

            try {

                if (!await Commands.findOne({ where: { id: IdCommand } })) {
                    return res.status(400).send({
                        erro: true,
                        message: 'Commands does not exist to delete',
                    });
                }

                await Commands.destroy({
                    where: {
                        id: IdCommand
                    }
                });

                return res.status(200).send({
                    erro: false,
                    message: "Commands delete with success",


                });


            } catch (e) {
                return res.status(500).send({
                    erro: true,
                    message: 'The server failed',
                });
            }

        } else {

            return res.status(400).send({
                erro: true,
                message: "id command is requeried",
            })

        }

    }

};
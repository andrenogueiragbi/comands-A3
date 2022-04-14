const typesCommands = require('../modal/TypesCommand');

module.exports = {
    async index(req, res) {

        try {

            const commands = await typesCommands.findAll();

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
                message: e,
            });
        }

    },

    async store(req, res) {


        const { type,
            title,
            description,
            commands,
            tags,
            creator } = req.body;

        if (type && title && description && commands && tags && creator) {

            try {

                if (await Commands.findOne({ where: { commands: commands } })) {
                    return res.status(400).send({
                        erro: true,
                        message: 'commands already exists',
                    });
                }

                const commandsNew = await Commands.create({ type, title, description, commands, tags, creator });

                return res.status(200).send({
                    erro: false,
                    message: 'commands created success',
                    commandsNew
                })


            } catch (e) {
                return res.status(500).send({
                    erro: true,
                    message: e,
                });
            }

        } else {

            return res.status(400).send({
                erro: true,
                message: "type, title,description, commands, tags and creator is requeried",
            })

        }
    },

    async update(req, res) {

        const { IdCommand } = req.params;
        const { type, title, description, commands, tags, creator } = req.body;

        if (IdCommand && type && title && description && commands && tags && creator) {

            try {
                const userExist = await Commands.findByPk(IdCommand);

                if (!userExist) {
                    return res.status(404).send({
                        erro: true,
                        message: 'command not found for update'
                    });

                }

                if (await Commands.findOne({ where: { commands: commands } })) {
                    return res.status(400).send({
                        erro: true,
                        message: 'commands already exists',

                    });
                }

                await Commands.update({ type, title, description, commands, tags, creator }, {
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
                    message: e,
                });

            }


        } else {
            return res.status(400).send({
                erro: true,
                message: "id command, type, title, description commands,tags ,creator , is requeried",
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
                    message: e,
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
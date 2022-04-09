const Commands = require('../modal/Commands');

module.exports = {
    async index(req, res) {

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

    },

    async store(req, res) {
        const { type,
            title,
            description,
            commands,
            tags,
            creator } = req.body;

        data = await Commands.findOne({ where: { commands: commands } })

        if (data) {
            return res.status(400).send({
                erro: true,
                message: 'commands already exists',
                commands: data

            });
        }

        if (!type || !title || !description || !commands || !tags || !creator) {
            return res.status(400).send({
                erro: true,
                message: 'Missing parameter'

            });
        }

        const commandsNew = await Commands.create({ type, title, description, commands, tags, creator });

        return res.status(200).send({
            erro: false,
            message: 'commands created success',
            commandsNew
        })

    },


    async update(req, res) {
        const { type, title, description, commands, tags, creator } = req.body;
        const { IdCommand } = req.params;


        data = await Commands.findOne({ where: { id: IdCommand } })

        console.log(">>>>>>", IdCommand)

        if (data == null) {
            return res.status(400).send({
                erro: true,
                message: 'Commands does not exist to update'
            });
        }

        if (!type || !title || !description || !commands || !tags || !creator) {
            return res.status(400).send({
                erro: true,
                message: 'Missing parameter'

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

    },

    async delete(req, res) {
        const { IdCommand } = req.params;
        data = await Commands.findOne({ where: { id: IdCommand } })

        if (data == null) {
            return res.status(400).send({
                erro: true,
                message: 'Commands does not exist to delete'
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
            deleted: data

        });

    }

};
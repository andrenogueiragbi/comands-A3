const typesCommands = require('../modal/TypesCommand');

module.exports = {
    async index(req, res) {

        try {

            const types = await typesCommands.findAll();

            if (types.length == 0) {
                return res.status(404).send({
                    erro: true,
                    message: 'Types commands list is empty'
                });
            }

            return res.status(200).send({
                erro: false,
                types
            });

        } catch (e) {

            return res.status(500).send({
                erro: true,
                message: 'The server failed'
            });
        }

    },

    async store(req, res) {


        const { name } = req.body;

        if (name) {

            try {

                if (await typesCommands.findOne({ where: { name: name } })) {
                    return res.status(400).send({
                        erro: true,
                        message: 'Types commands already exists',
                    });
                }

                const typesCommandsNew = await typesCommands.create({ name });

                return res.status(200).send({
                    erro: false,
                    message: 'Types commands created success',
                    typesCommandsNew
                })


            } catch (e) {
                return res.status(500).send({
                    erro: true,
                    message: 'The server failed'
                });
            }

        } else {

            return res.status(400).send({
                erro: true,
                message: "name is requeried",
            })

        }
    },

    async update(req, res) {

        const { Idtype } = req.params;
        const { name } = req.body;

        if (Idtype && name) {

            try {
                const typeExist = await typesCommands.findByPk(Idtype);

                if (!typeExist) {
                    return res.status(404).send({
                        erro: true,
                        message: 'Types commands not found for update'
                    });

                }

                if (await typesCommands.findOne({ where: { name: name } })) {
                    return res.status(400).send({
                        erro: true,
                        message: 'Types commands already exists',

                    });
                }

                await typesCommands.update({ name: name }, {
                    where: {
                        id: Idtype,
                    }
                });

                return res.status(200).send({
                    erro: false,
                    message: "Types commands update with success"
                });

            } catch (e) {
                return res.status(500).send({
                    erro: true,
                    message: 'The server failed'
                });

            }


        } else {
            return res.status(400).send({
                erro: true,
                message: "id command and name, is requeried",
            })
        }

    },

    async delete(req, res) {
        const { Idtype } = req.params;


        if (Idtype) {

            try {

                if (!await typesCommands.findOne({ where: { id: Idtype } })) {
                    return res.status(400).send({
                        erro: true,
                        message: 'Types commands does not exist to delete',
                    });
                }

                await typesCommands.destroy({
                    where: {
                        id: Idtype
                    }
                });

                return res.status(200).send({
                    erro: false,
                    message: "Types commands delete with success",


                });


            } catch (e) {
                return res.status(500).send({
                    erro: true,
                    message: 'The server failed'
                });
            }

        } else {

            return res.status(400).send({
                erro: true,
                message: "id Types commands is requeried",
            })

        }

    }

};
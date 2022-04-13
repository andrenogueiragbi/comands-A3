const User = require('../modal/User');
const Commands = require('../modal/Commands');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json')

function generateToken(params = {}) {
    let duratiomToken = 86400;  // 1 dia
    return jwt.sign(params, authConfig.secret, {
        expiresIn: duratiomToken,
    });
}

module.exports = {
    async login(req, res) {

        const { password, email, islogged } = req.body;

        if (password && email) {

            try {
                const user = await User.findOne({ where: { email } });

                if (!user || !bcrypt.compareSync(password, user.password)) {
                    return res.status(401).send({
                        erro: true,
                        message: 'unauthorized'
                    });
                }


                return res.status(200).send({
                    status: 1,
                    message: "User logged",
                    user,
                    token: generateToken({ id: user.id })
                });


            } catch (e) {
                return res.status(500).send({
                    erro: true,
                    message: e,
                })


            }

        } else {
            return res.status(400).send({
                erro: true,
                message: "password and email is requeried",
            });

        }

    },

    async index(req, res) {

        try {
            const users = await User.findAll();

            if (users == "" || users == null) {
                return res.status(200).send({ 'message': 'user not found' });
            }

            return res.status(200).send({ users });

        } catch (e) {
            return res.status(500).send({
                erro: true,
                message: e,
            });
        }

    },

    async store(req, res) {
        const { name, email, password, level, company } = req.body;

        if (name && email && password && level && company) {
            try {

                if (await User.findOne({ where: { email: email } })) {
                    return res.status(400).send({
                        erro: true,
                        message: 'user already exists'
                    });
                }

                const user = await User.create({ name, password, email, level, company });

                return res.status(200).send({
                    erro: false,
                    message: 'user created success',
                    user,
                    token: generateToken({ id: user.id })
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
                message: "password, email,level and company is requeried",
            })

        }

    },

    async update(req, res) {
        const { name, password, email, level, company } = req.body;
        const { user_id } = req.params;

        if (user_id && name && email && level && company) {
            try {
                const userExist = await User.findByPk(user_id);

                if (!userExist) {
                    return res.status(404).send({
                        erro: true,
                        message: 'user not found for update'
                    });

                }

                await User.update({
                    name, password, email
                }, {
                    where: {
                        id: userExist.id
                    }
                });

                const user = await User.findOne({ where: { id: userExist.id } });

                return res.status(200).send({
                    erro: false,
                    message: "Usuario update with success",
                    user
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
                message: "id user, password, email,level and company is requeried",
            })
        }
    },

    async delete(req, res) {
        const { user_id } = req.params;
        if (user_id) {
            try {

                if (!await User.findByPk(user_id)) {
                    return res.status(404).send({
                        erro: true,
                        message: 'User not found for to delete'
                    });
                }

                await User.destroy({
                    where: {
                        id: user_id
                    }
                });

                return res.status(200).send({
                    erro: false,
                    message: "User delete with success",
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
                message: "id user is requeried",
            })
        }
    }
};

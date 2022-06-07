const User = require('../modal/User');
const Commands = require('../modal/Commands');
const Ticket = require('../modal/Ticket');
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

    async store(req, res) {

        const { name, email, password, ticket, company } = req.body;

        if(!await Ticket.findOne({ where: { number: ticket, active:true, email_user:email} })){
            return res.status(400).send({
                erro: true,
                message: 'Ticket or user invalid'
            });

        }

        


        if (name && email && password && company && ticket) {
            try {

                if (await User.findOne({ where: { email: email } })) {
                    return res.status(400).send({
                        erro: true,
                        message: 'user already exists'
                    });
                }

                const user = await User.create({ name, password, email, company });
                await Ticket.update({
                    active: false
                }, {
                    where: {
                        number: ticket
                    }
                });


                return res.status(200).send({
                    erro: false,
                    message: 'user created success',
                    user,
                    token: generateToken({ id: user.id })
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
                message: "password, email,level and company is requeried",
            })

        }

    },

};

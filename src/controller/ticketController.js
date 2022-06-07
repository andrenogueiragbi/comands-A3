const ticket = require('../modal/Ticket');
const crypto = require('crypto');

module.exports = {
    async index(req, res) {

        try {

            const tickets = await ticket.findAll();

            if (tickets.length == 0) {
                return res.status(404).send({
                    erro: true,
                    message: 'Coupon list is empty'
                });
            }

            return res.status(200).send({
                erro: false,
                tickets
            });

        } catch (e) {

            return res.status(500).send({
                erro: true,
                message: 'The server failed'
            });
        }

    },

    async store(req, res) {


        const { email_user } = req.body;

        if (email_user) {

            try {

                if (await ticket.findOne({ where: { email_user: email_user } })) {
                    return res.status(400).send({
                        erro: true,
                        message: 'user already exists to create coupon'
                    });
                }


                rash = crypto.randomBytes(3)
                number = rash.toString('hex')

 
                const tiketNew = await ticket.create({ number, email_user });

                return res.status(200).send({
                    erro: false,
                    message: 'Coupon created success',
                    tiketNew
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
                message: "name is requeried",
            })

        }
    },

  

    async delete(req, res) {
        const { Idticket } = req.params;

        

        if (Idticket) {

            try {

                if (!await ticket.findOne({ where: { id: Idticket } })) {
                    return res.status(400).send({
                        erro: true,
                        message: 'Coupon does not exist to delete',
                    });
                }

                
                await ticket.destroy({
                    where: {
                        id: Idticket
                    }
                });

                return res.status(200).send({
                    erro: false,
                    message: "Coupon delete with success",


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
                message: "id Coupon commands is requeried",
            })

        }

    }

};
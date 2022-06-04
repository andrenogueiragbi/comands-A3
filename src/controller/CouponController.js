const Coupon = require('../modal/Coupon');
const crypto = require('crypto');

module.exports = {
    async index(req, res) {

        try {

            const coupon = await Coupon.findAll();

            if (coupon.length == 0) {
                return res.status(404).send({
                    erro: true,
                    message: 'Coupon list is empty'
                });
            }

            return res.status(200).send({
                erro: false,
                coupon
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

                if (await Coupon.findOne({ where: { email_user: email_user } })) {
                    return res.status(400).send({
                        erro: true,
                        message: 'user already exists to create coupon'
                    });
                }



                rash = crypto.randomBytes(3)
                number = rash.toString('hex')

 
                const couponNew = await Coupon.create({ number, email_user });

                return res.status(200).send({
                    erro: false,
                    message: 'Coupon created success',
                    couponNew
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
        const { IdCoupon } = req.params;

        console.log(IdCoupon)

        if (IdCoupon) {

            try {

                if (!await Coupon.findOne({ where: { id: IdCoupon } })) {
                    return res.status(400).send({
                        erro: true,
                        message: 'Coupon does not exist to delete',
                    });
                }

                
                await Coupon.destroy({
                    where: {
                        id: IdCoupon
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
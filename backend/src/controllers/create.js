const User = require('../models/user')
let crypto = require('crypto')


const CreateUser = async (req, res) => {

    var { name, email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (user)
        return res.status(200).send({ error: 'User early existis ' });

    if (!name)
        return res.status(400).send({ error: "sem nome" });
    if (!email)
        return res.status(400).send({ error: "sem email" });
    if (!password)
        return res.status(400).send({ error: "sem senha" });

    try {

        const hash = crypto
            .createHash('sha256')
            .update(password)
            .digest('hex');

        password = hash;

        const user = await User.create({ name, email, password })


        return res.status(200).send({ status: 200, sucess: 'Castrado com sucesso' });


    } catch (err) {
        res.status(400).send({ error: 'Registration failed ' + err });
    }

}

module.exports = CreateUser

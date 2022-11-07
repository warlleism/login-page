const User = require('../models/user')
let crypto = require('crypto')


const GetUser = async (req, res) => {

    var { email, password } = req.body

    if (!email)
        return res.status(400).send({ status: 400, error: 'Campo de email em branco' });

    if (!password)
        return res.status(400).send({ status: 400, error: 'Campo de senha em branco' });

    const user = await User.findOne({ where: { email } })

    if (!user) {
        return res.status(400).send({ status: 400, error: 'Usuário não existe' });
    }

    const pass = user.dataValues.password
    const hash = crypto.createHash('sha256').update(password).digest('hex');

    password = hash;

    if (pass != password)
        return res.status(400).send({ error: 'Senha inválida' });

    try {
        const user = await User.findOne({ where: { email } })
        user.password = undefined
        return res.status(200).send({ status: 200, sucess: 'usuario consta na base de dados' });

    } catch (err) {
        return res.status(400).send({ status: 400, error: 'Erro na listagem de usuário' + err });
    }
}

module.exports = GetUser

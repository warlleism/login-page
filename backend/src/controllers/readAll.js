const User = require('../models/user')

const GetAllUser = async (req, res) => {

    try {
        const user = await User.findAll()
        user.password = undefined
        return res.status(200).send(user);

    } catch (err) {
        return res.status(400).send({ error: 'Erro na listagem de usuário' + err });
    }
}

module.exports = GetAllUser

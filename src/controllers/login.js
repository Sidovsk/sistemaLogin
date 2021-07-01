const loginService = require('../services/login');

const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const {user, token} = await loginService.login(email, password);
        if(user){
            token ?
                res.json({token}) :
                res.status(404).json({ message: "Senha incorreta"});
        } else {
            res.status(404).json({ message: "E-Mail não cadastrado!"});
        }
    } catch(err){
        next(err);
    }
};

module.exports = {
    login
};
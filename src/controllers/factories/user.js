const userService = require('../../services/user');

const getUser = (isMyUser) => {
    return async (req, res, next) => {
        //if is my user 
        const userId = isMyUser ? req.user._id : req.params.id 
        try {
            const user = await userService.getUser(userId);
            user ?
                res.json(user) :
                res.status(404).json({ message: "Usuário não encontrado"});
        } catch(err){
            next(err);
        }
    }
};

module.exports = {
    getUser
};
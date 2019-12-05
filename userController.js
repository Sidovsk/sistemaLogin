const User = require('./userModel')
const jwt = require('jsonwebtoken')
const { pick } = require('lodash')
const { JWT_SECRET } = process.env

module.exports = {
    
    login: function (req, res, next){
        User.findOne({email: req.body.email})
            .then(user => {
                if(user){
                    if(user.validPassword(req.body.password)){
                        const token = jwt.sign({id: user._id}, JWT_SECRET)
                        res.json({token})
                    } else {
                        res.status(404).json({ message: "Senha incorreta"})
                    }
                    
                } else {
                    res.status(404).json({ message: "E-Mail não cadastrado!"})
                }
            })
            .catch(next)
    },

    createAccount: function (req, res, next){
        User.create({name: req.body.name, status: req.body.status, 
            email: req.body.email, password: req.body.password})
            .then(() => {
                res.status(201).json({message: "Usuário cadastrado com sucesso!"})
            })
            .catch(next)
    },

    getAllUsers: async function (req, res, next){
        try {
            const users = await User.find({}, {password: 0})
            res.json(users)
        } catch (err){
            next(err)
        }
    },

    getMyUser: function (req, res, next){
        User.findById(req.userId)
            .then(user => {
                if(user){
                    res.json(user)
                } else {
                    res.status(404).json({ message: "Usuário não encontrado"})
                }
            })
            .catch(next)
    },

    getUser: function (req, res, next){
        User.findById(req.params.id)
            .then(user => {
                if(user){
                    res.json(user)
                } else {
                    res.status(404).json({ message: "Usuário não encontrado"})
                }
            })
            .catch(next)
    },

    updateMyUser: async function (req, res, next){
        if(req.userId){
            const fields = pick(req.body, [
                'name',
                'email',
                'status'
            ])
            User.findById(req.userId)
                .then( async user => {
                    if(user){
                        for(const key in fields){
                            user[key] = fields[key]
                        }
                        await user.save()
                        res.json({ message: "Usuário alterado com sucesso!"})
                    } else {
                        res.status(404).json({ message: "Usuário não encontrado"})
                    }
                })
                .catch(next)
        } else {
            res.status(401).json({ message: "É necessário estar logado para atualizar seu usuário."})
        }
    },

    deleteMyUser: async function (req, res, next){
        try {
            await User.deleteOne({_id: req.userId})
            res.json({message: "Usuário deletado. Até mais, obrigado por utilizar o sistema!"})
        } catch (err) {
            next(err)
        }
    }
}
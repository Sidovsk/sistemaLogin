const {JWT_SECRET} = process.env
const jwt = require('jsonwebtoken')
const User = require('./userModel')

function authJWT(req, res, next) {
    const token = req.headers['authorization']
    if (!token) {
        return res.status(401).json({message: "Você não tem permissão para acessar esta rota!"})
    }
    jwt.verify(token, JWT_SECRET, function(err, decoded) {
      if (err) {
        res.json({status:"error", message: err.message, data:null})
      }else{
        // Se estiver correto adiciona a request para futuro uso
        User.findById(decoded.id)
          .then(user => {
            if(user){
              req.userId = decoded.id
              next()
            } else {
              res.status(401).json({message: "Você não tem permissão para acessar esta rota!"})
            }
          })
          .catch(err => {
            res.json({status:"error", message: err})
          })
      }
    })
}

module.exports = authJWT
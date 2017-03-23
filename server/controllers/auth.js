'use strict'

const Model = require('../models/users')
const Auth = {}

Auth.register = (req, res, next) => {
  Model.create(req.body).then((data) => {
    res.send(data)
  })
}

Auth.login = (req, res, next) => {
  Model.User.findOne({where: {username: req.body.username}}).then((user) => {
    if (!user) {
      res.send({usernotfound: true})
    }
    if (user) {
      if (hash.verify(req.body.password, user.password)) {
        let token = jwt.sign({
          username: user.username
        }, secret, {})
        res.send({token: token})
      } else {
        res.send({passworderror: true})
      }
    }
  }).catch((err) => {
    res.send({err: err})
  })
}

Auth.verify = (req, res, next) => {
  let token = req.params.token

  jwt.verify(token, secret, (err, decoded) => {
    if (decoded) {
      Model.User.find({where:{username : decoded.username}}).then((data) => {
        res.json({user: true, userdata: data})
      })
    }
    if (!decoded) {
      res.json({user: false})
    }
    if (err) {
      console.log(err)
    }
  })
}

module.exports = Auth

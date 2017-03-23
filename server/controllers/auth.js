'use strict'

const Model = require('../models/users')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const Auth = {}

let secret = "kukukakakkakikukakukaku"

Auth.register = (req, res, next) => {
  let hashed = crypto.createHmac('sha256', secret).update(req.body.password).digest('hex')

  let dataUser = {
    fullname: req.body.fullname,
    username: req.body.username,
    email: req.body.email,
    password: hashed
  }

  Model.create(dataUser).then((user) => {
    res.json({message: 'Register Success', data: user})
  }).catch((err) => {
    if (err) {
      res.json({
        err: err
      })
    }
  })
}

Auth.login = (req, res, next) => {
  Model.find({where: {username: req.body.username}}).then((user) => {
    res.send(user)
    // if (!user) {
    //   res.send({usernotfound: true})
    // }
    // if (user) {
    //   if (user.password == crypto.createHmac('sha256', secret).update(req.body.password).digest('hex')) {
    //     let token = jwt.sign({
    //       username: user.username
    //     }, secret, {})
    //     res.send({token: token})
    //   } else {
    //     res.send({passworderror: true})
    //   }
    // }
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

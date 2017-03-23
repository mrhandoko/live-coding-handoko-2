'use strict'

const Model = require('../models/users')
const Article = {}

Article.getArticles = (req, res, next) => {
  Model.find({}).then((data) => {
    res.send(data)
  })
}

Article.getArticle = (req, res, next) => {
  Model.findOne({_id:req.params.id}).then((data) => {
    res.send(data)
  })
}

Article.createNewArticle = (req, res, next) => {
  Model.create({
    title : req.body.title,
    content: req.body.content,
    author: req.body.author
  }).then((data) => {
    res.send(data)
  })
}

Article.updateArticle = (req, res, next) => {
  Model.update({ _id: req.params.id }, req.body).then((data) => {
    res.send(data)
  })
}

Article.removeArticle = (req, res, next) => {
  Model.remove({_id: req.params.id }).then((data) => {
    res.send(data)
  })
}

module.exports = Article

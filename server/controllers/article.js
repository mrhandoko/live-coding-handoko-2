'use strict'

const Model = require('../models/articles')
const Article = {}

Article.getArticles = (req, res, next) => {
  Model.find({}).populate('author').then((data) => {
    res.send(data)
  })
}

Article.getArticle = (req, res, next) => {
  Model.findOne({_id:req.params.id}).then((data) => {
    res.send(data)
  })
}

Article.createNewArticle = (req, res, next) => {
  Model.create(req.body).then((data) => {
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

'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('../config/config.js')


let articleSchema = new Schema ({
  title: String,
  content: String,
  content: String,
  author: String
}, {
  timestamps: true
})

let User = mongoose.model('Article', articleSchema)

module.exports = Article

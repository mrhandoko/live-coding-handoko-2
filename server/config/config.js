'use strict'

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const connection = mongoose.connect('mongodb://localhost/latihan')

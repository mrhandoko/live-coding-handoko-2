var express = require('express');
var router = express.Router();
var User = require('../controllers/user')
var Article = require('../controllers/article')
var Auth = require('../controllers/auth')

router.get('/users', User.getUsers)
router.get('/user/:id', User.getUser)
router.post('/user', User.createNewUser)
router.put('/user/:id', User.updateUser)
router.delete('/user/:id', User.removeUser)

router.get('/articles', Article.getArticles)
router.get('/article/:id', Article.getArticle)
router.post('/article', Article.createNewArticle)
router.put('/article/:id', Article.updateArticle)
router.delete('/article/:id', Article.removeArticle)

router.post('/login', Auth.login)
router.post('/register', Auth.register)
router.get('/verify/:token', Auth.verify)

module.exports = router;

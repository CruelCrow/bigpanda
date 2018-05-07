const express = require('express');
const CommentsController = require('./controllers/api/comments');
const AuthorsController = require('./controllers/api/author');

let router = express.Router();
router.get('/author', AuthorsController.get);
router.get('/comments',CommentsController.list);
router.post('/comments', CommentsController.create);

module.exports = router;
const express = require('express');

let router = express.Router();
router.get('/*', function (req, res) {
    res.render('app');
});

module.exports = router;
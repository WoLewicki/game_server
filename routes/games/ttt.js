var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('ttt', {title: 'Tic Tac Toe'});
});

module.exports = router;
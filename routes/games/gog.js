var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('ttt', {title: 'Game of Gale'});
});

module.exports = router;
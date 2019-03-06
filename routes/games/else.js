var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('ttt', {title: 'Something Else'});
});

module.exports = router;
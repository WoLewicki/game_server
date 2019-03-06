var express = require('express');
var router = express.Router();


/* GET eskulap home page. */
router.get('/', function(req, res, next) {
    res.render('home', { title: 'Eskulap' });
});

module.exports = router;

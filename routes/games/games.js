var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    var tictac = {name: 'Tic Tac Toe', url: '/ttt'};
    var gale = {name: 'Game of Gale', url: '/gog'};
    var something = {name: 'Something Else', url: '/else'};
    var ajaxtictac = {name: 'Ajax',  url: '/ajtt'};
    res.render('games', { title: 'Express', games: [tictac, gale, something, ajaxtictac] });
});

module.exports = router;

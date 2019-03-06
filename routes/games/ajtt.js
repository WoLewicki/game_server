var express = require('express');
var router = express.Router();
var TicTacToeBoard = [];
var player = 'O';
var stopped = false;

router.get('/', (req, res) => {
    if (TicTacToeBoard.length === 0) TicTacToeBoard = prepareBoard();
    res.render('ajtt', {stopped: stopped, title: 'Ajax Tic Tac Toe', backend_board: TicTacToeBoard,
        linker: req.originalUrl + '/end'});
});

router.post('/ajax_send_values', (req, res) => {
    var ij = req.body.my_data;
    var i = parseInt(ij.split(',')[0]);
    var j = parseInt(ij.split(',')[1]);
    TicTacToeBoard[i][j] = player;
    if(check_if_ended(TicTacToeBoard))
    {
        stopped = true;
    }
    else {
        change_player();
        res.json(TicTacToeBoard);
    }
});

router.get('/end', (req, res) =>{
    reset_game();
    res.render('won', {title: 'ajtt-end', player: player});
});

router.get('/restart', (req, res)=>{
    reset_game();
});

function reset_game(){
    TicTacToeBoard = [];
    stopped = false;
}

function prepareBoard()
{
    player = 'O';
    board = [];
    for(var i=0;i<3;i++) {
        board.push([]);
        for (var k = 0; k < 3; k++)
        {
            board[i].push('E');
        }
    }
    return board;
}

function change_player(){
    if (player === 'O')
        player = 'X';
    else if(player === 'X')
        player = 'O';
}

function check_if_ended(board){

    for(var i=0;i<3;i++)
    {
        if (board[i][0] !== 'E' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) return true;
        if (board[0][i] !== 'E' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) return true;
        if (board[0][0] !== 'E' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) return true;
        if (board[2][0] !== 'E' && board[2][0] === board[1][1] && board[1][1] === board[0][2]) return true;
    }
    if (board_full(board))
    {
        player = 'NO ONE';
        return true;
    }
    return false;
}

function board_full(board)
{
    for (var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            if(board[i][j] === 'E') return false;
        }
    }
    return true;
}

module.exports = router;

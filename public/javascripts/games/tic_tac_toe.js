function logme(){
    console.log("Logged");
}

var board = [];
var player = 'O';


function click_me(id, player){
    if (board.length === 0) prep();
    var x = parseInt(id.split(",")[0]);
    var y = parseInt(id.split(",")[1]);
    if (player === 'O') document.getElementById(id).innerHTML = "<img src='/images/O.jpg'/>";
    else if(player === 'X') document.getElementById(id).innerHTML = "<img src='/images/X.jpg'/>";
    document.getElementById(id).removeAttribute('onclick');
    board[x][y] = player;
    if(check_if_ended()){

        document.getElementById('restartButton').removeAttribute('hidden');
    }
    change_player();
}

function change_player(){
    if (player === 'O')
        player = 'X';
    else if(player === 'X')
        player = 'O';
}

function check_if_ended(){
    if (board_full()) return true;
    for(var i=0;i<3;i++)
    {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) return true;
        if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) return true;
        if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) return true;
        if (board[2][0] !== '' && board[2][0] === board[1][1] && board[1][1] === board[0][2]) return true;
    }
    return false;
}

function board_full()
{
    for (var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            if(board[i][j] === '') return false;
        }
    }
    return true;
}

function prep()
{
    board = [];
    for(var i=0;i<3;i++) {
        board.push([]);
        for (var k = 0; k < 3; k++)
        {
            board[i].push('');
        }
    }
    console.log(board);
}



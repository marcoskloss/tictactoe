const board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let gameOver = false;
let player1Score = 0;
let player2Score = 0;

const symbols = ['x', 'o'];

const winStates = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

function handleMove(position) {

  if(gameOver) return;

  if(board[position] == ''){
    
    board[position] = symbols[playerTime];

    gameOver = isWin();

    if(!gameOver) {

      playerTime == 0 ? playerTime = 1 : playerTime = 0;
    }
  }

  return gameOver;
}

function score() {
  playerTime == 0 ? player1Score++ : player2Score++;
  console.log(player1Score, player2Score);
}

function isWin() {

  for(let i = 0; i < winStates.length; i++) {
    
    const sequence = winStates[i];
    
    const pos1 = sequence[0];
    const pos2 = sequence[1];
    const pos3 = sequence[2];

    if(board[pos1] == board[pos2] &&
       board[pos1] == board[pos3] &&
       board[pos1] != '') {

      return true;
    }
  }

  return false;
}
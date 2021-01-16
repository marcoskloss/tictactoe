const resetBtn = document.getElementById('reset');

document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.addEventListener('click', handleClick);
  });
});

function handleClick(evt) {

  const square = evt.target;
  const position = square.id;

  if(handleMove(position)) {

    score();
    updateScore();
    scoreMessage(); 
  }
  updateSquare(position);
}

function updateSquare(position) {
  const square = document.getElementById(position.toString());
  const symbol = board[position];
  square.innerHTML = `<div class=${symbol}></div>`;
}

function resetGame() {
  playerTime = 0;
  gameOver = false;
  for(let i = 0; i < board.length; i++) {

    board[i] = '';
  }

  const squares = document.querySelectorAll('.square');

  squares.forEach(square => {
      square.innerHTML = ``;
  });

  const message = document.getElementById('message-text');
  message.innerHTML = '';
}

function updateScore() {
  const score1 = document.getElementById('score-player1');
  const score2 = document.getElementById('score-player2');

  score1.innerHTML = player1Score;
  score2.innerHTML = player2Score;
}

function scoreMessage() {
  const message = document.getElementById('message-text');
  message.innerHTML = `Player ${playerTime + 1} wins!`;
}

resetBtn.addEventListener('click', resetGame);
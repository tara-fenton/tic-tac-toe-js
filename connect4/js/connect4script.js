// make the board dynamic
var board = [
    [0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0]
]
var currentPlayer = 1; //will be 1 or 2
var count = 0;
// vertical winStates
function checkVertical() {
  // loop through the rows 0 - 2
  for (var row = 0; row < 3; row++) {
    // loop through the columns
    for (var col = 0; col < board.length; col++) {
      // checking for 4 down
      //console.log("checking "+board[row][col]);
      if (board[row][col] != 0 &&
          board[row][col] === board[row+1][col] &&
          board[row][col] === board[row+2][col] &&
          board[row][col] === board[row+3][col]) {
        console.log("winner!"+board[row][col])
        return board[row][col];
      }
    }
  }
}
checkVertical();

// horizontal winStates
function checkHorizontal() {
  // loop through the rows
  for (var row = 0; row < board.length; row++) {
    // loop through the columns
    for (var col = 0; col < 3; col++) {
      // checking for 4 across
      console.log("checking "+board[row][col]);
      if (board[row][col] != 0 &&
          board[row][col] === board[row][col+1] &&
          board[row][col] === board[row][col+2] &&
          board[row][col] === board[row][col+3]) {
        console.log("winner!"+board[row][col])
        return board[row][col];
      }
    }
  }
}
//checkHorizontal();

// diagonial winStates

// select the column to drop the players pick


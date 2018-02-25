// make the board dynamic
// first check complete
// var board = [
//     [0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 0, 0, 0],
//     [2, 1, 0, 2, 0, 0, 0],
//     [2, 0, 1, 0, 2, 0, 0],
//     [2, 0, 0, 1, 0, 2, 0],
//     [2, 0, 0, 0, 0, 0, 2]
// ]
// edge cases
var board = [
    [1, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 1, 0, 0, 0],
    [1, 0, 0, 2, 0, 0, 1],
    [2, 0, 1, 0, 2, 1, 1],
    [2, 0, 0, 1, 1, 2, 1],
    [2, 0, 0, 1, 2, 2, 2]
]

var connect = 4;
// vertical winStates
function checkVertical() {
  // loop through the rows (top - connect)
    for (var row = 0; row <= rowCount - connect; row++) {
      //for (var row = 0; row <= 3; row++) {
    // loop through the columns
      for (var col = 0; col < colCount; col++) {
    //for (var col = 0; col < board.length; col++) {
      ////
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
//checkVertical();

// horizontal winStates
function checkHorizontal() {
  // loop through the rows
  for (var row = 0; row < rowCount; row++) {
    console.log(row);
    // loop through the columns
    for (var col = 0; col <= colCount - connect; col++) {
      console.log(row,col);
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
var rowCount = 6;
var colCount = 7;
// diagonial winStates
function checkDiagonialDown() {
  // loop through the rows
  for (var row = 0; row < rowCount; row++) {
    // loop through the columns
    for (var col = 0; col <= colCount - connect; col++) {
      // checking for 4 diagonial top down
      console.log("checking "+board[row][col]);
      if (board[row][col] != 0 &&
          board[row][col] === board[row+1][col+1] &&
          board[row][col] === board[row+2][col+2] &&
          board[row][col] === board[row+3][col+3]) {
        console.log("winner!"+board[row][col])
        return board[row][col];
      }
    }
  }
}
//checkDiagonialDown();
var rowCount = 6;
var colCount = 7;
function checkDiagonialUp() {
  // loop through the rows backwards only until 4 less than top
  for (var row = rowCount - 1; row > rowCount - connect; row--) {
    // loop through the columns backwards only until 4 less than left
    for (var col = rowCount; col > colCount - connect; col--) {
      // checking for 4 diagonial bottom up
      console.log("checking "+board[row][col]);
      if (board[row][col] != 0 &&
          board[row][col] === board[row-1][col-1] &&
          board[row][col] === board[row-2][col-2] &&
          board[row][col] === board[row-3][col-3]) {
        console.log("winner!"+board[row][col])
        return board[row][col];
      }
    }
  }
}
checkDiagonialUp();
// select the column to drop the players pick


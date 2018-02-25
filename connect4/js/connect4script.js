/////////////////////// CREATE THE BOARD //////////////////////////////
var rowCount = 6;
var colCount = 7;
var connect = 4;
var board = [];
var round = 0;
var $containerDiv = $('body').append("<div id='container' width='400px'></div>");
$('#container').css('width', "400");
function makeBoard(rowCount, colCount) {
  var rows = [];
  for (var i = 0; i <= rowCount; i++) {

    for (var j = 0; j < colCount; j++) {
      rows.push(0);
    $('#container').append("<div class='boxes' id='box" + i+j + "'>" + i+j + "</div>");
    $('#box'+i+j).css({"border": "4px solid black", "width": "20", "height": "20", "display": "inline-block"});
    // adds event listener for clicking on the individual divs
    $('#box'+i+j).on('click', boxClick);



    }
    // push the row into the board
    board.push(rows);
    $('#container').append('<br>');
    // reset the row
    rows=[];
  }
}
function boxClick(evt) {
}
makeBoard(rowCount, colCount);
console.log(board);
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
// var board = [
//     [1, 0, 1, 1, 0, 0, 0],
//     [1, 0, 1, 1, 0, 0, 0],
//     [1, 0, 0, 2, 0, 0, 1],
//     [2, 0, 1, 0, 2, 1, 1],
//     [2, 0, 0, 1, 1, 2, 1],
//     [2, 0, 0, 1, 2, 2, 2]
// ]


/////////////////////// CHECK FOR WINSTATES ///////////////////////////
var winner = 0;
// vertical winStates
function checkVertical() {
  // loop through the rows (top - connect)
    for (var row = 0; row <= rowCount - connect; row++) {
    // loop through the columns
      for (var col = 0; col < colCount; col++) {
      // checking for 4 down
      //console.log("checking "+board[row][col]);
      if (board[row][col] != 0 &&
          board[row][col] === board[row+1][col] &&
          board[row][col] === board[row+2][col] &&
          board[row][col] === board[row+3][col]) {
        console.log("winner!"+board[row][col])
        winner = board[row][col];
        return board[row][col];
      }
    }
  }
}

// horizontal winStates
function checkHorizontal() {
  // loop through the rows
  for (var row = 0; row < rowCount; row++) {
    // loop through the columns
    for (var col = 0; col <= colCount - connect; col++) {
      // checking for 4 across
      //console.log("checking "+board[row][col]);
      if (board[row][col] != 0 &&
          board[row][col] === board[row][col+1] &&
          board[row][col] === board[row][col+2] &&
          board[row][col] === board[row][col+3]) {
        console.log("winner!"+board[row][col])
        winner = board[row][col];
        return board[row][col];
      }
    }
  }
}

var rowCount = 6;
var colCount = 7;
// diagonial winStates
function checkDiagonialDown() {
  // loop through the rows
  for (var row = 0; row < rowCount; row++) {
    // loop through the columns
    for (var col = 0; col <= colCount - connect; col++) {
      // checking for 4 diagonial top down
      //console.log("checking "+board[row][col]);
      if (board[row][col] != 0 &&
          board[row][col] === board[row+1][col+1] &&
          board[row][col] === board[row+2][col+2] &&
          board[row][col] === board[row+3][col+3]) {
        console.log("winner!"+board[row][col])
        winner = board[row][col];
        return board[row][col];
      }
    }
  }
}

function checkDiagonialUp() {
  // loop through the rows backwards only until 4 less than top
  for (var row = rowCount - 1; row > rowCount - connect; row--) {
    // loop through the columns backwards only until 4 less than left
    for (var col = rowCount; col > colCount - connect; col--) {
      // checking for 4 diagonial bottom up
      //console.log("checking "+board[row][col]);
      if (board[row][col] != 0 &&
          board[row][col] === board[row-1][col-1] &&
          board[row][col] === board[row-2][col-2] &&
          board[row][col] === board[row-3][col-3]) {
        console.log("winner!"+board[row][col])
        winner = board[row][col];
        return board[row][col];
      }
    }
  }
}

function checkForAWin() {
  checkVertical();
  checkHorizontal();
  checkDiagonialDown();
  checkDiagonialUp();
  if (winner === 0) {
    console.log("no winner :(")
  } else {
    console.log("winner! "+winner)
  }
}
//checkForAWin();
// select the column to drop the players pick


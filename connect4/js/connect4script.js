/////////////////////// CREATE THE BOARD //////////////////////////////
var rowCount = 6;
var colCount = 7;
var connect = 4;
var board = [];
var player = 1;
var $containerDiv = $('body').append("<div id='container'></div>");
// $('#container').css('width', "400");
var $dropDiv = $('#container').append("<div id='drop'></div>");
// $('#drop').css('width', "400");
function makeBoard(rowCount, colCount) {
  var rows = [];
  for (var i = 0; i < rowCount; i++) {

    for (var j = 0; j < colCount; j++) {
      rows.push(0);
    $('#container').append("<div class='boxes' id='box" + i+j + "'>" + i+j + "</div>");
    // $('#box'+i+j).css({"border": "4px solid black", "width": "20", "height": "20", "display": "inline-block"});
    // adds event listener for clicking on the individual divs
    //$('#box'+i+j).on('click', boxClick);



    }
    // push the row into the board
    board.push(rows);
    $('#container').append('<br>');
    // reset the row
    rows=[];
  }
}
// select the column to drop the players pick
function boxClick(evt) {
  //change the player
  if (player === 1) { player = 2; } else { player = 1; }
  console.log("clicked "+evt.target.id);
  var index = Number(evt.target.id.charAt(4));
  //check the position of the first available from the bottom
  for (var col = rowCount - 1; col >= 0; col--) {
    console.log(col, board[col][index])
    if (board[col][index] === 0) {
      console.log('im empty')
      //push the players id in the board array at the open position
      board[col][index] = player;
      // add player red/black style to open div
      $('#box'+col+index).text(player);
      break;
      console.log(board);

      //return checkForAWin();
    }
  }
  //check for a win
  checkForAWin();



  //console.log(player);



}
makeBoard(rowCount, colCount);

function makeDropRow() {
  for (var i = 0; i <= rowCount; i++) {
    $('#drop').append("<div class='dropRow' id='drop" + i + "'></div>");
    $('#drop'+i).css({"border": "4px solid red", "width": "20", "height": "20", "display": "inline-block"});
    // adds event listener for clicking on the individual divs
    $('#drop'+i).on('click', boxClick);
  }
}
makeDropRow();
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
  checkDiagonialUp(); //up backwards
  if (winner === 0) {
    console.log("no winner :(")
  } else {
    console.log("winner! "+winner)
  }
}



/*
today we are going to solve this problem. we are given a 2-d array of characters,and we need to extract a string
from it. problem requirement states that we start at the top left, Let's assume this is a chessboard. 
We will move diagonally each time, meaning we move one square to the right bottom each time, 
and move up to the right up if we reach the bottom row. This process is repeateded until we reach the rightmost column, 
then we'll move out of the board, return the resulting string, and the function terminates.
In short, the path is a zigzag line, right?
*/

// Write an enumeration to represent directions.
const Direction = {
  Up: 1,
  Down: 2
};

function decode(message) {
  // First, handle the boundary conditions.
  if (!message || message?.length === 0) {
    return '';
  }
  // The initial direction is downward.
  let direction = Direction.Down;
  // After that, determine the width and height of the matrix.
  const cols = message[0].length;
  const rows = message.length;

  // follwing that, set the initial values for the coordinates, and the initial result string;
  let res = '';
  let col = 0;
  let row = 0;
  // Because we stop if we move outside the rightmost edge, the loop condition is col < cols.
  while (col < cols) {
    // Concatenate the string
    res += message[row][col];
    // then I'll create a function called getNextCoord to calculate the next coordinates and direction.
    // the parameters passed in are tentative for now and might be removed if they are not needed later.
    [row, col, direction] = getNextCoord({rows, col, row, direction})
  }
  return res;
}

// each time we call this function in while loop means that we need to get next status, right? so firstly, 
// in any case, the col should move one squire to right, so I'm going to increase col by 1.
function getNextCoord({ rows, col, row, direction }) {
  col += 1;
  // The test cases for this problem are incomplete. You can see that when I input a single string of characters (If there is only one row of letters), 
  // it only outputs the first letter.  
  // it should output all the letters instead of just the first one. Therefore, a special case needs to be added here.
  if (rows === 1) {
    return [row, col, direction];
  }
  // next, we need to determine what the next direction is.
  if (row === 0) {
    direction = Direction.Down;
  } 
  if (row === rows - 1) {
    direction = Direction.Up;
  }
  // set the new value for 'row' based on the new direction
  if (direction === Direction.Down) {
    row += 1;
  } else {
    row -= 1;
  }
  return [row, col, direction];
}
// My code is done now. Let me visually check if there are any issues. Alright, it seems fine. Let's submit it.

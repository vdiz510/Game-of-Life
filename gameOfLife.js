/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  let rowLength = board.length, colLength = board[0].length
  let directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]

  // 1st pass thru
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      let lives = 0

      for (let d of directions) {
        // check for array out of bounds
        if (d[0] + row < 0 || d[0] + row >= rowLength || d[1] + col < 0 || d[1] + col >= colLength) continue
        else if (board[d[0] + row][d[1] + col] == 1 || board[d[0] + row][d[1] + col] == 2)
          lives++;
      }

      // [4. Reproduction] if dead cell has 3 neighbors, set cell to 3 
      if (board[row][col] == 0 && lives == 3) board[row][col] = 3

      // [1, 3] if live cell is under/overpopulated, set cell to 2
      if (board[row][col] == 1 && (lives < 2 || lives > 3)) board[row][col] = 2

      // else, [2. Live cell lives on]
    }
  }

  // 2nd pass thru
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      board[row][col] %= 2
    }
  }
};

module.exports = {
  gameOfLife
}
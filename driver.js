/**
* Tests are examples given from the problem description at
* https://leetcode.com/problems/game-of-life/
*/

const { gameOfLife } = require('./gameOfLife')

let board = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]
console.log("Input: ", board)
gameOfLife(board)
console.log("Output:", board)
console.log("Expect:", [[0, 0, 0], [1, 0, 1], [0, 1, 1], [0, 1, 0]])

board = [[1, 1], [1, 0]]
console.log("Input: ", board)
gameOfLife(board)
console.log("Output:", board)
console.log("Expect:", [[1, 1], [1, 1]])
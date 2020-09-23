/*
 * The validate method returns `true` if the entire sudoku table is valid, `false` otherwise.
 * Expected input for this function is a variable number of Arrays, where each array
 * represents one row of a sudoku table.
 * 
 * For example you could expect something like this for a valid table:
 * 
 * [
 * [2,9,5,7,4,3,8,6,1],
 * [4,3,1,8,6,5,9,2,7],
 * [8,7,6,1,9,2,5,4,3],
 * [3,8,7,4,5,9,2,1,6],
 * [6,1,2,3,8,7,4,9,5],
 * [5,4,9,2,1,6,7,3,8],
 * [7,6,3,5,2,4,1,8,9],
 * [9,2,8,6,7,1,3,5,4],
 * [1,5,4,9,3,8,6,7,2]
 * ]
 * 
 * Please fill out the validate() method below to ensure correct validation of each Sudoku board according to the rules of Sudoku (listed below).  You may create new methods called by the validate() method, but may not modify any code used to run the test.

 * Sudoku Rules:
 * ==============
 * Using this image as an example: http://imgur.com/a/jusVQ
 * # Each cell can be empty or contain a single number from 1-9
 * # Each row (red) cannot have cells with duplicate values (unless the cell is empty)
 * # Each column (yellow) cannot have cells with duplicate values (unless the cell is empty)
 * # Each region (blue) cannot have cells with duplicate values (unless the cell is empty)
 * 
 * @params board an array of arrays, where each array element represents a row in a sudoku table
 * @return true if the Sudoku table contains valid values, false otherwise.
 */
function validate(board) {

  return false;
}








































/************************************************************************************
*
*                    TESTING CODE BELOW
*
************************************************************************************/

const util = require('util');
const zlib = require('zlib');
const gzippedPuzzleBoardsBase64Encoded = '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';

const Buffer = require('buffer').Buffer;
const boardBuffer64 = Buffer.from(zlib.inflateSync(Buffer.from(gzippedPuzzleBoardsBase64Encoded, 'base64')).toString(), 'base64');
const loopIt = new Map(JSON.parse(boardBuffer64));

let total = 0;
let passed = 0;
for (const set of loopIt) {
    total++;
    const str = set[1];

    const res = validate(JSON.parse(str));

    if (res == set[0][1]) {
      console.log('\x1b[32m%s\x1b[0m',util.format('%s, ✔ expected %s, returned %s', set[0][0], set[0][1], res));
      passed++; 
    } else {
      console.log('\x1b[31m%s\x1b[0m', util.format('%s, ✖ expected %s, returned %s', set[0][0], set[0][1], res));
    }
    
}

console.log('===============================================');
console.log(util.format('Overall result : %s out of %s passed validation', passed, total));
console.log('');

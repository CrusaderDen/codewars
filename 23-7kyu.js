/*
https://www.codewars.com/kata/5566b0dd450172dfc4000005/train/javascript

As part of this kata, you need to find the length of the sub-array that begins and ends with the specified number.

For example, if the array arr is [0, -3, 7, 4, 0, 3, 7, 9], finding the length of the sub-array that begins and ends with 7s would return 5.

For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

If there are less or more than two occurrences of the number to search for, return 0.
*/

var lengthOfSequence = function (arr, n) {
   if (arr.length < 2) return 0
   const countOfN = arr.filter((num) => num === n).length
   if (countOfN === 0 || countOfN > 2) return 0
   return arr.slice(arr.indexOf(n), arr.lastIndexOf(n) + 1).length
}

console.log(lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9], 7))

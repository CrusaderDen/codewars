/*
https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

*/

function findOutlier(integers) {
   const isEven1 = (integers[0] & 1) === 0
   const isEven2 = (integers[1] & 1) === 0
   const isEven3 = (integers[2] & 1) === 0
   let isEvenArr = 1
   if ((isEven1 === true && isEven2 === true) ||
    (isEven1 === true && isEven3 === true )|| 
    (isEven2 === true && isEven3 === true )) {
      isEvenArr = 0
   }
   if (isEvenArr === 0) {
      return integers.find((num) => {
         return (num & 1) === 1
      })
   } else if (isEvenArr === 1) {
      return integers.find((num) => {
         return (num & 1) === 0
      })
   } else return "Something strange"
}

console.log(findOutlier([2, 6, 8, 10, 3]))
console.log(findOutlier([1, 1, 0, 1, 1]))

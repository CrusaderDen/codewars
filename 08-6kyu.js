// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(number) {
   if (number < 0) return 0
   let sumNumbers = 0
   for (let i = 1; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
         sumNumbers += i
      }
   }
   return sumNumbers
}

console.log(solution(10))

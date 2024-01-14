// https://www.codewars.com/kata/55466644b5d240d1d70000ba/train/javascript

function candies(kids) {
   if (kids.length<=1) return -1
   const max = Math.max(...kids)
   let result = 0
   for (let i = 0; i < kids.length; i++) {
      result += max - kids[i]
   }
   return result
}

console.log(candies([5, 8, 6, 4]))
console.log(candies([0]))

//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(array) {
   function isOdd(n) {
      if (n & (1 === 1)) return true
      else return false
   }

   const oddArray = array.filter(isOdd)

   const newArray = []

   for (let i = 0; i < array.length; i++) {
      if (!isOdd(array[i])) {
         newArray.push(array[i])
      } else {
         let currentMin = oddArray.splice(oddArray.indexOf(Math.min(...oddArray)), 1)
         newArray.push(currentMin[0])
      }
   }
   return newArray
}

console.log(sortArray([11, 1, 2, 8, 3, 4, 5]))

// best practice:

function sortArrayBest(array) {
   const odd = array.filter((x) => x % 2).sort((a, b) => a - b)
   return array.map((x) => (x % 2 ? odd.shift() : x))
}

console.log(sortArrayBest([11, 1, 2, 8, 3, 4, 5]))

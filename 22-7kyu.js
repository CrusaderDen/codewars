/*
https://www.codewars.com/kata/5b93fecd8463745630001d05/train/javascript


*/

function snail(column, day, night) {
   let currentDist = 0
   let currentRecord = 0
   let currentDay = 0
   while (currentRecord < column) {
      currentRecord = currentDist+ day
      currentDay++
      currentDist = currentRecord - night
   }
   return currentDay
}

console.log(snail(3, 2, 1))

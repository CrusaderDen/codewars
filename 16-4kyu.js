// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript
/*
Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals
List containing overlapping intervals:

[
   [1, 4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

Examples:
sumIntervals( [
   [1, 2],
   [6, 10],
   [11, 15]
] ) => 9

sumIntervals( [
   [1, 4],
   [7, 10],
   [3, 5]
] ) => 7

sumIntervals( [
   [1, 5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ) => 19

sumIntervals( [
   [0, 20],
   [-100000000, 10],
   [30, 40]
] ) => 100000030
Tests with large intervals
Your algorithm should be able to handle large intervals. All tested intervals are subsets of the range [-1000000000, 1000000000].*/

/*
function sumIntervals(intervals) {
   let tempArr = []
   let swither

   function reduceRange(intervals) {
      for (let i = 0; i < intervals.length; i++) {
         let currentItem = intervals[i]
         tempArr.push(intervals[i])

         for (let j = i + 1; j < intervals.length; j++) {
            if (
               (currentItem[0] >= intervals[j][0] && currentItem[0] <= intervals[j][1]) ||
               (currentItem[1] >= intervals[j][0] && currentItem[1] <= intervals[j][1]) ||
               (intervals[j][0] >= currentItem[0] && intervals[j][0] <= currentItem[1]) ||
               (intervals[j][1] >= currentItem[1] && intervals[j][1] <= currentItem[1])
            ) {
               tempArr.push(intervals[j])
               console.log(`J = ${j}, Find and del range ${intervals[j]}`)
               intervals.splice(j, 1)
               j--
               swither = 1
               console.log(intervals)
            } else {
               console.log(
                  `J = ${j}, ${intervals[i]} compare with ${intervals[j]}  - This range is unic`
               )
            }
         }
         let flatArr = tempArr.flat()
         let min = Math.min(...flatArr)
         let max = Math.max(...flatArr)
         intervals[i][0] = min
         intervals[i][1] = max

         console.log(intervals)
         console.log("----------")
         tempArr = []
      }
   }

   do {
      swither = 0
      reduceRange(intervals)
   } while (swither !== 0)

   console.log(intervals)
   let result = null
   for (let i = 0; i < intervals.length; i++) {
      result += intervals[i][1] - intervals[i][0]
   }
   return result
}
*/

function sumIntervals(intervals) {
   let tempArr = []
   let resultArr = []
   let swither

   function reduceRange(intervals) {
      for (let i = 0; i < intervals.length; i++) {
         let currentItem = intervals[i]
         tempArr.push(intervals[i])

         for (let j = i + 1; j < intervals.length; j++) {
            if (
               (currentItem[0] >= intervals[j][0] && currentItem[0] <= intervals[j][1]) ||
               (currentItem[1] >= intervals[j][0] && currentItem[1] <= intervals[j][1]) ||
               (intervals[j][0] >= currentItem[0] && intervals[j][0] <= currentItem[1]) ||
               (intervals[j][1] >= currentItem[1] && intervals[j][1] <= currentItem[1])
            ) {
               tempArr.push(intervals[j])
               console.log(`J = ${j}, Find and del range ${intervals[j]}`)
               swither = 1
               intervals[j] = 0
               console.log(intervals)
            } else {
               console.log(
                  `J = ${j}, ${intervals[i]} compare with ${intervals[j]}  - This range is unic`
               )
            }
         }
         let flatArr = tempArr.flat()
         let min = Math.min(...flatArr)
         let max = Math.max(...flatArr)
         intervals[i][0] = min
         intervals[i][1] = max

         console.log(intervals)
         console.log("----------")
         tempArr = []
      }
   }

   do {
      swither = 0
      console.log("Новая рекурсия")
      console.log(intervals)
      reduceRange(intervals)
   } while (swither !== 0)

   console.log(intervals)
   let result = null
   for (let i = 0; i < intervals.length; i++) {
      if (intervals[i] !== 0) {
         result += intervals[i][1] - intervals[i][0]
      }
   }
   return result
}

// console.log(sumIntervals(intervals))

/*
[1, 2],
[6, 10],
[11, 15]


[1, 2] [6, 10] [11, 15] [14-18]

min = 1
max = 2

if (nextMin<min && max<nextMax) {
   nextMin=min
} else if (nextMax>max && min>nextMin ) {
   nextMax = max
} else if (nextMax>max && nextMin<min) {
   nextMin = min
   nextMax = max
}
(intervals[j][1] > max && intervals[j][0] < min) {
            min = nextMin
            max = nextMax
            intervals[j][1] = null
            continue

*/
function newInterval(intervals) {
   let min, max, nextMin, nextMax
   let resultArr = []
   for (let i = 0; i < intervals.length; i++) {
      if (intervals[i] === 0) continue
      min = intervals[i][0]
      max = intervals[i][1]
      console.log(`i=${i}, min=${min}, max=${max}`)
      for (let j = i + 1; j < intervals.length; j++) {
         if (intervals[j][1] > max && intervals[j][0] < min) {
            console.log("minmax")
            min = intervals[j][1]
            max = intervals[j][0]
            intervals[j] = 0
         } else if (intervals[j][1] > max && max > intervals[j][0]) {
            console.log("max")
            max = intervals[j][1]
            intervals[j] = 0
         } else if (intervals[j][0] < min && max > intervals[j][1]) {
            console.log("min")
            min = intervals[j][0]
            intervals[j] = 0
         } else {
            console.log("error")
         }
         console.log(`min = ${min} | max = ${max}`)
         resultArr.push([min, max])
      }
   }
   // console.log(intervals)
   return resultArr
}

const intervals = [
   [1, 5],
   [-2, 4],
   [1, 6],
   [16, 19],
   [5, 11],
]

console.log(newInterval(intervals))

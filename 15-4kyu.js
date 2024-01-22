// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

/*
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
 returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
*/

function solution(arr) {
   let result = []
   let i = 0

   while (i < arr.length) {
      let rangeStart = null,
         rangeEnd = null

      while (arr[i + 1] === arr[i] + 1) {
         if (rangeEnd === null) {
            rangeStart = arr[i]
         }
         rangeEnd = arr[i + 1]
         i++
      }
      if (rangeEnd - rangeStart >1 ) {
         result.push(`${rangeStart}-${rangeEnd}`)
         i = arr.indexOf(rangeEnd) + 1
         rangeStart = null
         rangeEnd = null
      } else if (rangeEnd - rangeStart === 1) {
         result.push(rangeStart)
         result.push(rangeEnd)
         i++
      } else {
         result.push(arr[i])
         i++
      }
   }
   return result.join(",")
}

console.log(solution([-5, 1, 4, 5, 6, 8, 12, 13, 18]))


// best practice
function solution(individualIntegers) {
	return individualIntegers
		.reduce(splitIntoRanges, [])
		.map(convertToRange)
		.join(",");
}

function splitIntoRanges(ranges, number) {
	if (!ranges.length) {
		ranges.push([number]);
		return ranges;
	}

	var lastRange = ranges[ranges.length - 1];
	var lastNumber = lastRange[lastRange.length - 1];

	number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
	return ranges;
}

function convertToRange(range) {
	return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
}

//best 2

function solution(list){
   for(var i = 0; i < list.length; i++){
      var j = i;
      while(list[j] - list[j+1] == -1) j++;
      if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
  }
  return list.join();
}
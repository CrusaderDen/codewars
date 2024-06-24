/*
https://www.codewars.com/kata/5a1dc4baffe75f270200006b

Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"

*/

function onlyDuplicates(str) {
   const result = []
   for (let char of str) {
      if ([...str].filter((el) => char === el).length > 1) result.push(char)
   }
   return result.join("")
}

console.log(onlyDuplicates("abccdefee"))

/*
https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript


Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

function solution(string) {
   const reg = string.match(/[A-Z]/g)
   console.log(reg)
   if (!reg) return string
   const indexes = []
   for (let i = 0; i < string.length; i++) {
      for (let j = 0; j < reg.length; j++) {
         if (string[i] === reg[j]) {
            indexes.push(i)
            break
         }
      }
   }
   return string
      .split("")
      .map((el, index) => (indexes.includes(index) ? " " + el : el))
      .join("")
}

console.log(solution("oldTimeVerbsWorldWeekWuuAsk"))

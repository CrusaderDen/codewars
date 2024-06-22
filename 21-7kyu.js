/*
https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript


*/

function printerError(s) {
   const errors = s.match(/[n-z]/g)
   return `${errors ? errors.length : 0}/${s.length}`
}

console.log(printerError("aaabbbbhaijjjmzzz"))

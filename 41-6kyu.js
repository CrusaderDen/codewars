/*
https://www.codewars.com/kata/59325dc15dbb44b2440000af/train/javascript

Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

*/

function isAlt(word) {
   const reg = /[aeiou]/
   const wordToArr = word.split("")
   let check = true
   for (let i = 1; i < wordToArr.length; i++) {
      if (reg.test(wordToArr[i]) === reg.test(wordToArr[i - 1])) {
         check = false
         break
      }
   }
   return check
}
console.log(isAlt("aabae"))

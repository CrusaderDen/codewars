/*
https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

*/

function findMissingLetter(array) {
   let result
   array.forEach((letter, index, arr) => {
      if (!arr[index + 1]) return
      const nextLetterNumber = arr[index + 1].codePointAt(0)
      const waitingLetterNumber = arr[index].codePointAt(0) + 1
      if (nextLetterNumber !== waitingLetterNumber) result = waitingLetterNumber
   })
   return String.fromCodePoint(result)
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]))
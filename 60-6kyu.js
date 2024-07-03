/*
https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!

*/

function expandedForm(num) {
   return num
      .toString()
      .split("")
      .map((n, i, arr) => {
         return n + "0".repeat(arr.length - i - 1)
      })
      .filter((n) => n[0] !== '0')
      .join(" + ")
}

console.log(expandedForm(70354))

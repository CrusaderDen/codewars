/*
https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/

function towerBuilder(nFloors) {
   const result = ["*"]
   for (let i = 1; i < nFloors; i++) {
      result.push(result[i - 1] + "**")
   }
   const maxElementLength = result.at(-1).length
   return result.map((el, index) => {
      const spaces = maxElementLength - el.length
      return " ".repeat(spaces / 2) + el + " ".repeat(spaces / 2)
   })
}

console.log(towerBuilder(6))

/*
https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript

Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

Ex:

274 -> '2-7-4'
6815 -> '68-1-5'

*/

function dashatize(num) {
   let defises = ("" + Math.abs(num)).replace(/([13579])/g, "-$1-")
   if (defises[defises.length - 1] === "-") defises = defises.slice(0, -1)
   if (defises[0] === "-") defises = defises.slice(1)
   return defises.split("--").join("-")
}

console.log(dashatize(-1))

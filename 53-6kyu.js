/*
https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

*/

function toCamelCase(str) {
   const strToArr = str.replaceAll("_", "-").split("-")
   return strToArr
      .map((el, index) => (index > 0 ? el.slice(0, 1).toUpperCase() + el.slice(1) : el))
      .join("")
}

console.log(toCamelCase("the_stealth_warrior"))

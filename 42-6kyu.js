/*
https://www.codewars.com/kata/515decfd9dcfc23bb6000006

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string

*/

function isValidIP(str) {
   const arrFromStr = str.split(".")
   const lengthCheck = arrFromStr.length === 4
   const numberDiapazonCheck = arrFromStr.every((el) => +el >= 0 && +el <= 255)

   let anotherChecks = true
   arrFromStr.forEach((el) => {
      if (el.match(/[^0-9]/)) anotherChecks = false
      if ((el.length > 1 && el[0] === "0") || el.split("").includes("e") || el === '') anotherChecks = false
   })

   return anotherChecks && lengthCheck && numberDiapazonCheck
}

console.log(isValidIP("9.255.56.9"))
console.log(isValidIP("0.0.0.0"))
console.log(isValidIP("12.255.56.1"))
console.log(isValidIP("1.2.3.4\n"))
console.log(isValidIP("11.249..155"))

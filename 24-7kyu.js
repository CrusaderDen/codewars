/*
https://www.codewars.com/kata/57029e77005264a3b9000eb5/train/javascript

The notorious Captain Schneider has given you a very straightforward mission. Any data that comes through the system make sure that only non-special characters see the light of day.

Create a function that given a string, retains only the letters A-Z (upper and lowercase), 0-9 digits, and whitespace characters. Also, returns "Not a string!" if the entry type is not a string.
*/

function nothingSpecial(str) {
 if (typeof str !== "string") return "Not a string!"
    const clearStr = str.match(/[A-Za-z0-9 \t]/g)
    return clearStr? clearStr.join("") : ''
 }

console.log(nothingSpecial("I,j6U)sfzYPGdQ"))

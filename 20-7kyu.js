/*
https://www.codewars.com/kata/56d6b921c9ae3fd926000601/train/javascript


*/

Number.prototype.toString = function () {
   return this + ""
}

Boolean.prototype.toString = function () {
   return this.valueOf() ? "true" : "false"
}

Array.prototype.toString = function () {
   return "[" + this.join(", ") + "]"
}



console.log([2, 4, 8, 17].toString() === "[2, 4, 8, 17]")

// https://www.codewars.com/kata/65112af7056ad6004b5672f8/train/javascript

function possiblyPerfect(key, answers) {
   let result = 0
   let emptyKey = 0
   for (let i = 0; i < answers.length; i++) {
      if (key[i] === answers[i]) {
         result++
      } else if (key[i] === "_") {
         emptyKey++
      }
   }
   return result + emptyKey === answers.length || result === 0 ? true : false
}

console.log(possiblyPerfect(["A", "_", "C", "_", "B"], ["A", "D", "C", "E", "B"])) //true
console.log(possiblyPerfect(["B", "_", "B"], ["B", "D", "C"])) //false
console.log(possiblyPerfect(["T", "_", "F", "F", "F"], ["F", "F", "T", "T", "T"])) //true
console.log(possiblyPerfect(["A", "B", "_", "C"], ["D", "C", "T", "C"])) //false


//
function possiblyPerfect(key,answers) {
   return key.every((k, i) => k === '_' || k === answers[i]) || key.every((k, i) => k !== answers[i]);
 }
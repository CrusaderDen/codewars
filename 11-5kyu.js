// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag(str) {
   let strToArr = [...str]
   if (str === "" || strToArr.filter((char) => char != " ").length === 0) return false
   for (let i = 0; i < strToArr.length; i++) {
      if (strToArr[i] + strToArr[i + 1] == "  ") {
         strToArr.splice(i, 1)
      }
   }
   if (strToArr[0] === " ") strToArr.shift()
   if (strToArr[strToArr.length - 1] === " ") strToArr.pop()

   let x = strToArr.join("")
   let y = x.split(" ")

   for (let i = 0; i < y.length; i++) {
      y[i] = y[i].slice(0, 1).toUpperCase() + y[i].slice(1)
   }
   y.unshift("#")
   let result = y.join("")
   if (result.length > 140) {
      return false
   } else {
      return result
   }
}

console.log(generateHashtag(" asd asdass sdasd     asdasasd     "))


// best practice

function generateHashtag (str) {

   var hashtag = str.split(' ').reduce(function(tag, word) {
     return tag + word.charAt(0).toUpperCase() + word.substring(1);
   }, '#');
   
   return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
 }
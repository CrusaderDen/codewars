// https://www.codewars.com/kata/543e308b23ccbda148001526/train/javascript

function typing(param) {
   let paramContent
   if (typeof param == "string") {
      paramContent = '"' + param + '"'
   } else if (Array.isArray(param)) {
      paramContent = "[" + param + "]"
   } else if (typeof param == "object") {
      paramContent = `{"hello":"world"}`
   } else if (param === undefined) {
      return undefined
   } else {
      paramContent = param
   }
   return `${typeof param}=${paramContent}`
}

console.log(typing(undefined))

//best practice 
function typingBest(param) {
   if (param == null) return String(param);
   
   var type = typeof param;
   var value = type == 'function' ? param.toString() : JSON.stringify(param);
 
   return type + '=' + value;
 }
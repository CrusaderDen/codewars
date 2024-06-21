/*
https://www.codewars.com/kata/524300d5add6f657e20008ff/train/javascript

You need to write a function ( addOrChangeUrlParameter(url, keyValueParameter) ) that can manipulate URL parameters.

It should be able to

add a parameter to an existing URL,
but also to

change a parameter if it already exists.

*/

/**
 * Play with URLs
 * @param {string} url - The URL that's we want to manipulate
 * @param {string} param - The parameter that we want to change or add
 * @returns {string} The result URL.
 */
function addOrChangeUrlParameter(url, param) {
   // console.log("url", url)
   // console.log("param", param)

   const getKeyFromQuery = (query) => query.slice(0, query.indexOf("="))

   if (!param) return url

   const queryStartIndex = url.indexOf("?") + 1
   if (!queryStartIndex) {
      return url + "?" + param
   } else {
      const [URLstring, queryString] = url.split("?")
      const paramKey = getKeyFromQuery(param)
      const queryArr = queryString.split("&")
      let flag = false
      for (let i = 0; i < queryArr.length; i++) {
         const currentKey = getKeyFromQuery(queryArr[i])
         if (currentKey == paramKey) {
            queryArr[i] = param
            flag = true
         }
      }
      if (!flag )queryArr.push(param)
      return URLstring + "?" + queryArr.join("&")
   }
}

console.log(
   addOrChangeUrlParameter("http://xxx.ample.org?Age=Coders&Clan=Allan&ID=1234", "Clan=42")
)

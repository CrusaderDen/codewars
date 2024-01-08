// https://www.codewars.com/kata/57faf12b21c84b5ba30001b0/train/javascript

function remove(string) {
   return [...string].filter((x) => x !== "!").join("") + "!"
}

console.log(remove("asd!a!!"))

// best practice

const removeBest = s => s.replace(/!+/g, "")+"!";
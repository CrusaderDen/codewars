// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

function removeSmallest(numbers) {
   const cloneNumbers = structuredClone(numbers)
   cloneNumbers.splice(cloneNumbers.indexOf(Math.min(...cloneNumbers)), 1)
   return cloneNumbers
}

console.log(removeSmallest([1, 2, 3, 4, 5]))

// best practice

function removeSmallest(numbers) {
   let indexOfMin = numbers.indexOf(Math.min(...numbers));
   return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
 }

 function removeSmallest(numbers) {
   const min = Math.min.apply(this, numbers);
   return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
 }
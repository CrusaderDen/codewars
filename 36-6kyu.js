/*
https://www.codewars.com/kata/55ae997d1c40a199e6000018/train/javascript

Task:
You have to write a function pattern which returns the following Pattern(See Examples) upto n number of rows.

Note:Returning the pattern is not the same as Printing the pattern.
Rules/Note:
The pattern should be created using only unit digits.
If n < 1 then it should return "" i.e. empty string.
The length of each line is same, and is equal to the number of characters in a line i.e n.
Range of Parameters (for the sake of CW Compiler) :
n ∈ (-50,150]
Examples:
pattern(8):

88888888
87777777
87666666
87655555
87654444
87654333
87654322
87654321
pattern(17):

77777777777777777
76666666666666666
76555555555555555
76544444444444444
76543333333333333
76543222222222222
76543211111111111
76543210000000000
76543210999999999
76543210988888888
76543210987777777
76543210987666666
76543210987655555
76543210987654444
76543210987654333
76543210987654322
76543210987654321

*/

function pattern(n) {
   if (n<1) return ''
   const output = []
   let itemLength = n
   let startNumber = (n + "").slice(-1)
   let startStr = ""

   for (let i = 1; i <= n; i++) {
      let currentStr = ""
      for (let charPosition = 1; charPosition < itemLength; charPosition++) {
         currentStr += startNumber
      }
      startStr += startNumber
      output.push(startStr + currentStr)

      itemLength -= 1
      startNumber -= 1
      if (startNumber < 0) startNumber = 9
   }
   return output.join('\n')
}

console.log(pattern(17))

//печатаем нужное число n раз

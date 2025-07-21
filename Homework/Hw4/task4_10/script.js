function arrayMinValue(numbers) {
let min = numbers[0];
 for (let number of numbers) {
     if (number < min) {
         min = number;
     }
 }
 return min;
}
console.log(arrayMinValue([44, -32, 53, 434, 0]))
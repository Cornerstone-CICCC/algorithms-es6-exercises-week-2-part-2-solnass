// Sort Exercise
// Instructions: Create an array of at least five numbers in random order. Write the code to sort this array in ascending order.


const numbers = [52, 33, 45, 7, 83, 1, 104 ]

console.log(numbers.sort((a, b) => a > b ? 1 : -1))
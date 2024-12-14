function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  return a + b;
}

console.log(add(1, 2)); // Output: 3

//Example demonstrating the error handling
try{
  console.log(add(1, '2'))
} catch (error) {
  console.error(error.message); // Output: Both arguments must be numbers
}
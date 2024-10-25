function reverseString(str) {
    // Split the string into an array, reverse it, then join it back into a string
    return str.split('').reverse().join('');
  }
  function countCharacters(str) {
    // Return the length of the string
    return str.length;
  }
  function capitalizeWords(str) {
    // Use a regular expression to find the start of each word and capitalize it
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }
  function findMax(arr) {
    // Use the Math.max function with the spread operator to find the maximum value
    return Math.max(...arr);
  }
  
  function findMin(arr) {
    // Use the Math.min function with the spread operator to find the minimum value
    return Math.min(...arr);
  }
  function sumArray(arr) {
    // Use the reduce method to sum up the elements of the array
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  function filterArray(arr, conditionFn) {
    // Use the filter method to return elements that meet the condition
    return arr.filter(conditionFn);
  }
  function factorial(n) {
    // Base case: if n is 0, return 1
    if (n === 0) {
      return 1;
    }
    // Recursive case: return n multiplied by the factorial of n-1
    return n * factorial(n - 1);
  }
  function isPrime(num) {
    // Check if the number is less than or equal to 1
    if (num <= 1) {
      return false;
    }
    // Loop from 2 to num-1 to check if num is divisible by any number
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  function fibonacci(num) {
    // Start with an array containing the first two numbers of the sequence
    let fib = [0, 1];
    // Loop to generate the rest of the sequence
    for (let i = 2; i < num; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
                  
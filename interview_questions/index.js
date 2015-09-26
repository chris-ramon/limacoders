// 0) Example of function with comments.

/*
 * @description
 * Given an array finds the index equilibrium
 *
 * @param {array}
 *
 * @returns {number}
 *
* */
function eq(arr) {
  for (var i=0; i < arr.length; ++i) {
    console.log(arr.splice(0, i+1));
    console.log(i);
  }
  return -1;
}

// 1) Write a simple function (less than 80 characters) that returns a boolean indicating whether or not a string is a palindrome.

/*
 * @description
 * Checks if given string is a Palindrome.
 *
 * @param {string} s
 *
 * @returns {boolean}
* */
function isPalindrome(s) {
  s = s.replace(/\W/g, '').toLowerCase();
  return s.split('').reverse().join('') === s;
}

s1 = 'abc';
s2 = 'aba';
s3 = 'holaloh';
s4 = 'A car, a man, a maraca';

console.assert(isPalindrome(s1) === false, s1 + ': not a Palindrome');
console.assert(isPalindrome(s2) === true, s2 + ': is a Palindrome');
console.assert(isPalindrome(s3) === true, s3 + ': is a Palindrome');
console.assert(isPalindrome(s4) === true, s4 + ': is a Palindrome');

// 2) Write a function the works passes the following asserts;
// sum(2,3);   // Outputs 5
// sum(2)(3);  // Outputs 5

/*
 * @description
 *
 * @returns {number|function}
* */
function sum(a, b) {
  if (typeof b === 'undefined') {
    return function(b) {
      return sum(a, b);
    }
  }
  return a + b;
}

console.assert(sum(2, 3) === 5, '(sum(2,3) === 5) is true');
console.assert(sum(2)(3) === 5, '(sum((2)(3)) === 5) is true');

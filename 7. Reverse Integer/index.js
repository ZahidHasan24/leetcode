// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

const reverse = (x) => {
  const isLessThanZero = x < 0;
  const absValue = Math.abs(x);
  const reversedValue = String(absValue).split("").reverse().join("");

  if (
    +reversedValue < Math.pow(2, 31) * -1 ||
    +reversedValue > Math.pow(2, 31) - 1
  )
    return 0;

  if (isLessThanZero) {
    return +-reversedValue;
  } else if (reversedValue[0] === 0) {
    return +reversedValue.slice(0);
  } else {
    return +reversedValue;
  }
};

const res = reverse(123);
console.log(res); // 321
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

const isValid = (s) => {
    const obj = {
      "(": ")",
      "{": "}",
      "[": "]",
    };

    let stack = [];

    for (const paran of s) {
      if (obj.hasOwnProperty(paran)) {
        stack.push(paran);
      } else {
        const closeParan = stack.pop();
        if (paran !== obj[closeParan]) {
          return false;
        }
      }
    }

    return stack.length === 0;
};

const res = isValid('()[]{}');
console.log(res); // true
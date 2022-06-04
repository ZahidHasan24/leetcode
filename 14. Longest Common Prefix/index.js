// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const longestCommonPrefix = (strs) => {
  let prefix = strs.reduce((acc, str) => (str.length < acc.length ? str : acc));

  strs.forEach((str) => {
    while (str.slice(0, prefix.length) !== prefix) {
      prefix = prefix.slice(0, -1);
    }
  });

  return prefix;
};

const result = longestCommonPrefix(["flower", "flow", "flight"]);
console.log(result); // "fl"

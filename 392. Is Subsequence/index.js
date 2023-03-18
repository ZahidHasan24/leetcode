// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

const isSubsequence = (s, t) => {
  if (s === "") {
    return true;
  }
  let i = 0;
  let j = 0;
  while (j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    if (i === s.length) {
      return true;
    }
    j++;
  }
  return false;
};

const res = isSubsequence("abc", "ahbgdc");
console.log(res); // true

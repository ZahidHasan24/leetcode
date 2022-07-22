// Implement strStr().

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

const strStr = (haystack, needle) => {
  if (needle === "" || needle === haystack) return 0;
  if (haystack.length < needle.length) return -1;
  if (haystack.indexOf(needle) > -1) {
    return haystack.indexOf(needle);
  }
  return -1;
};

const result = strStr("hello", "ll");
console.log(result); // 2

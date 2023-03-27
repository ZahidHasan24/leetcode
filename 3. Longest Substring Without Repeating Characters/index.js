// 3. Longest Substring Without Repeating Characters
// Medium
// 32.9K
// 1.4K
// Companies
// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

const lengthOfLongestSubstring = (s) => {
  let substr = "";
  let count = 0;
  let maxLen = 0;

  while (count < s.length) {
    const char = s[count];
    if (!substr.includes(char)) {
      substr += char;
    } else {
      substr = substr.slice(substr.indexOf(char) + 1);
      substr += char;
    }
    maxLen = Math.max(maxLen, substr.length);
    count++;
  }
  return maxLen;
};

const res = lengthOfLongestSubstring("pwwkew");
console.log(res); // 3

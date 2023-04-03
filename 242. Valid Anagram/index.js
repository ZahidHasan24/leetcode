// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  const sMap = {};
  const tMap = {};
  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]]) {
      sMap[s[i]] += 1;
    } else {
      sMap[s[i]] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (tMap[t[i]]) {
      tMap[t[i]] += 1;
    } else {
      tMap[t[i]] = 1;
    }
  }

  for (const key in sMap) {
    if (sMap[key] !== tMap[key]) {
      return false;
    }
  }

  return true;
};

const res = isAnagram("anagram", "nagaram");
console.log(res); // true

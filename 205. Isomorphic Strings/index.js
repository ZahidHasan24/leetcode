// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true

const isIsomorphic = (s, t) => {
  // Create two maps to store the character mappings for s and t
  const sMap = {};
  const tMap = {};

  // Iterate through each character in s and check if it's in the sMap
  // If it's not, add it and its corresponding character in t to the sMap
  // If it is, make sure the corresponding character in t matches the one in the sMap
  for (let i = 0; i < s.length; i++) {
    if (!sMap[s[i]]) {
      sMap[s[i]] = t[i];
    } else if (sMap[s[i]] !== t[i]) {
      // If the corresponding character in t doesn't match the one in the sMap,
      // then s and t are not isomorphic, so return false
      return false;
    }
  }

  // Iterate through each character in t and check if it's in the tMap
  // If it's not, add it and its corresponding character in s to the tMap
  // If it is, make sure the corresponding character in s matches the one in the tMap
  for (let i = 0; i < t.length; i++) {
    if (!tMap[t[i]]) {
      tMap[t[i]] = s[i];
    } else if (tMap[t[i]] !== s[i]) {
      // If the corresponding character in s doesn't match the one in the tMap,
      // then s and t are not isomorphic, so return false
      return false;
    }
  }

  // If we make it through both loops without returning false, then s and t are isomorphic,
  // so we can return true
  return true;
};

const res = isIsomorphic("paper", "title");
console.log(res); // true

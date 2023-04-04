// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

const groupAnagrams = (strs) => {
  let hashMap = {};
  let result = [];

  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split("").sort();
    if (hashMap[key]) {
      hashMap[key].push(strs[i]);
    } else {
      hashMap[key] = [strs[i]];
    }
  }

  for (let key in hashMap) {
    result.push(hashMap[key]);
  }
  return result;
};

const res = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(res); // [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]

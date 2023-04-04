// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

const topKFrequent = (nums, k) => {
  const hashMap = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (!hashMap[nums[i]]) {
      hashMap[nums[i]] = 1;
    } else {
      hashMap[nums[i]] += 1;
    }
  }

  const sortedArr = Object.entries(hashMap)
    .map(([k, v]) => [parseInt(k), v])
    .sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    result.push(sortedArr[i][0]);
  }

  return result;
};

const res = topKFrequent([1, 1, 1, 2, 2, 3], 1);
console.log(res); // [1]

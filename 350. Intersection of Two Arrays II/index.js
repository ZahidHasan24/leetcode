// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

const intersect = (nums1, nums2) => {
  const obj = {};
  let arr = [];

  for (let i = 0; i < nums1.length; i++) {
    if (obj[nums1[i]]) {
      obj[nums1[i]] += 1;
    } else {
      obj[nums1[i]] = 1;
    }
  }

  for (let j = 0; j < nums2.length; j++) {
    if (obj[nums2[j]] > 0) {
      arr.push(nums2[j]);
      obj[nums2[j]] -= 1;
    }
  }

  return arr;
};

const res = intersect([4, 9, 5], [9, 4, 9, 8, 4]);
console.log(res); // [ 9, 4 ]

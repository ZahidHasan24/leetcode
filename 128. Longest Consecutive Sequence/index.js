// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

const longestConsecutive = (nums) => {
  // Create a new Set 'numSet' that contains all the unique elements of the input array 'nums'
  const numSet = new Set(nums);
  // Initialize a variable 'longestStreak' to 0
  let longestStreak = 0;
  // Loop through each number in the Set 'numSet'
  for (let num of numSet) {
    // Check if the Set 'numSet' does NOT have the number (num-1) in it
    if (!numSet.has(num - 1)) {
      // Initialize a variable 'currentStreak' to 1
      let currentStreak = 1;
      // While the Set 'numSet' has the number (num+1) in it
      while (numSet.has(num + 1)) {
        // Increment the 'currentStreak' variable by 1 and also increment the number 'num' by 1
        currentStreak++;
        num++;
      }
      // Update the 'longestStreak' variable to be the maximum value between 'longestStreak' and 'currentStreak'
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }
  // Return the 'longestStreak' variable as the output of the function
  return longestStreak;
};

const res = longestConsecutive([100, 4, 200, 1, 3, 2]);
console.log(res); // 4

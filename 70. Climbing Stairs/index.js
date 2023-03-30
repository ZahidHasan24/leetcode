// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

const climbStairs = (n) => {
  // Create an array to store the number of ways to reach each step
  const dp = new Array(n + 1);

  // There is only one way to reach the first step
  dp[0] = 1;

  // There are two ways to reach the second step
  dp[1] = 2;

  // For each step from 3 to n, calculate the number of ways to reach it
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  // The number of ways to reach the top is equal to the number of ways to reach the last step
  return dp[n - 1];
};

const res = climbStairs(3);
console.log(res); // 3

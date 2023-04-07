// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

const generate = (numRows) => {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
    result.push(row);
  }
  return result;
};

const res = generate(6);
console.log(res);
//  [
//     [ 1 ],
//     [ 1, 1 ],
//     [ 1, 2, 1 ],
//     [ 1, 3, 3, 1 ],
//     [ 1, 4, 6, 4, 1 ],
//     [ 1, 5, 10, 10, 5, 1 ]
//   ]

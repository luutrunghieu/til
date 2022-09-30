// https://leetcode.com/problems/sort-colors/

var sortColors = function (nums) {
  let pointer = 0;

  let red = 0;
  let white = 0;
  let blue = 0;

  while (pointer < nums.length) {
    if (nums[pointer] === 0) red++;
    if (nums[pointer] === 1) white++;
    if (nums[pointer] === 2) blue++;
    pointer++;
  }
  let i = 0;
  while (red > 0) {
    nums[i++] = 0;
    red--;
  }
  while (white > 0) {
    nums[i++] = 1;
    white--;
  }
  while (blue > 0) {
    nums[i++] = 2;
    blue--;
  }
};

// ----------------
const nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums);

// https://leetcode.com/problems/minimum-size-subarray-sum/

var minSubArrayLen = function (target, nums) {
  let left = 0;
  let right = 0;

  let res = Number.MAX_SAFE_INTEGER;
  let total = 0;

  while (right < nums.length) {
    total += nums[right];
    while (total >= target) {
      res = Math.min(res, right - left + 1);
      total -= nums[left];
      left++;
    }
    right++;
  }

  if (res === Number.MAX_SAFE_INTEGER) return 0;
  return res;
};

// -------------
const target = 7;
const numbs = [2, 3, 1, 2, 4, 3];
const res = minSubArrayLen(target, numbs);
console.log(res);

// https://leetcode.com/problems/merge-sorted-array/

var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] < nums2[j]) {
      nums1[k--] = nums2[j--];
    } else {
      nums1[k--] = nums1[i--];
    }
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
};

// -------------------------
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);

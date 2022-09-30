// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function (s) {
  const chars = new Map();

  let left = 0;
  let right = 0;

  let res = 0;

  const size = s.length;

  while (right < size) {
    let r = s[right];
    if (chars[r] > 0) {
      chars[r]++;
    } else {
      chars[r] = 1;
    }

    while (chars[r] > 1) {
      let l = s[left];
      chars[l]--;
      left++;
    }
    res = Math.max(res, right - left + 1);
    right++;
  }
  return res;
};

// -------------------

const s = 'abcabcbb';
console.log(lengthOfLongestSubstring(s));

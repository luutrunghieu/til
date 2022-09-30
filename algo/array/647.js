// https://leetcode.com/problems/palindromic-substrings/
let count = 0;

var countSubstrings = function (s) {
  for (let i = 0; i < s.length; i++) {
    checkPalindrome(s, i, i);
    checkPalindrome(s, i, i + 1);
  }
  return count;
};

var checkPalindrome = function (s, i, j) {
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    count++;
    i--;
    j++;
  }
};

const s = 'aaa';
const result = countSubstrings(s);
console.log(result);

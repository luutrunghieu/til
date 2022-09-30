// https://leetcode.com/problems/minimum-window-substring/

const minWindow = function (s, t) {
  const m = new Map();
  let start = 0;
  let end = 0;
  let minLen = Number.MAX_SAFE_INTEGER;
  let counter = t.length;
  const size = s.length;
  let minStart = 0;

  for (const c of t) {
    if (m[c]) {
      m[c]++;
    } else {
      m[c] = 1;
    }
  }

  while (end < size) {
    if (m[s[end]] > 0) {
      counter--;
    }
    m[s[end]]--;
    end++;

    while (counter === 0) {
      if (end - start < minLen) {
        minStart = start;
        minLen = end - start;
      }

      m[s[start]]++;
      if (m[s[start]] > 0) {
        counter++;
      }
      start++;
    }
  }
  if (minLen != Number.MAX_SAFE_INTEGER) {
    return s.substring(minStart, minStart + minLen);
  }
  return '';
};

// --------------------

const s = 'ADBANCBA';
const t = 'ABC';

const result = minWindow(s, t);
console.log(result);

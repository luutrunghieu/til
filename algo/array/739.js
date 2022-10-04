// https://leetcode.com/problems/daily-temperatures/

var dailyTemperatures = function (temperatures) {
  let result = [];
  for (let i = temperatures.length - 1; i >= 0; --i) {
    let j = i + 1;
    while (j < temperatures.length && temperatures[j] <= temperatures[i]) {
      if (result[j] > 0) j = result[j] + j;
      else j = temperatures.length;
    }
    if (j < temperatures.length) result[i] = j - i;
    else result[i] = 0;
  }
  return result;
};

// -----------------
const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
const result = dailyTemperatures(temperatures);
console.log(result);

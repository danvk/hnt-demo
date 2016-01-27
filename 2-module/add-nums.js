var _ = require('underscore');

// Add an array of numbers, returning the result.
function addNums(nums) {
  return _.reduce(nums, function(a, b) { return a + b });
}

module.exports = addNums;

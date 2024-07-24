var longestConsecutive = function (nums) {
  if (nums.length == 0) return 0;

  max_ = 0;
  count = 0;
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] == nums[i] + 1) {
      count++;
      if (count > max_) max_ = count;
    } else if (nums[i + 1] == nums[i]) {
      continue;
    } else {
      count = 0;
    }
  }
  return max_ + 1;
};

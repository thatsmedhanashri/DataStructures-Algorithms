var containsNearbyDuplicate = function (nums, k) {
  // for(let i=0; i<nums.length-1; i++){
  //     for(let j=i+1; j<nums.length; j++) {
  //         if(nums[i]==nums[j] && Math.abs(i-j)<=k)
  //             return true
  //     }
  // }
  // return false

  let map_ = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map_.has(nums[i])) {
      if (Math.abs(map_.get(nums[i]) - i) <= k) return true;

      map_.set(nums[i], i);
    }
    map_.set(nums[i], i);
  }
  return false;
};

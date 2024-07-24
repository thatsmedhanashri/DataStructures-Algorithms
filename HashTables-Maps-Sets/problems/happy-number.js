var isHappy = function (num) {
  n = num.toString().split("");
  map_ = new Map();
  return check(n);

  function check(n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
      sum = Math.pow(parseInt(n[i]), 2) + sum;
    }
    if (map_.has(sum)) {
      return false;
    } else {
      map_.set(sum, 1);
    }
    if (sum == 1) return true;

    return check(sum.toString().split(""));
  }
};

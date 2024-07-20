// 374. Guess Number Higher or Lower

var guessNumber = function (n) {
  let start = 1;
  let end = n;
  while (start <= end) {
    let mid = Math.ceil((start + end) / 2);
    if (guess(mid) == 0) {
      return mid;
    } else if (guess(mid) == -1) {
      end = mid - 1;
    } else if (guess(mid) == 1) {
      start = mid + 1;
    }
  }
  return null;
};

var maxLevelSum = function (root) {
  let arr = [];
  getsum(root, 0);

  function getsum(root, h) {
    if (!root) return;

    if (arr[h] == undefined) {
      arr[h] = root.val;
    } else {
      arr[h] = arr[h] + root.val;
    }

    getsum(root.left, h + 1);
    getsum(root.right, h + 1);
  }

  let max_ = Math.max(...arr);
  return arr.indexOf(max_) + 1;
};

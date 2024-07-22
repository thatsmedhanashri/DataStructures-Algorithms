var rightSideView = function (root) {
  if (!root) return [];

  let arr = [];
  sideview(root, 0);
  function sideview(root, h) {
    if (!root) return;

    arr[h] = root.val;
    sideview(root.left, h + 1);
    sideview(root.right, h + 1);
  }
  return arr;
};

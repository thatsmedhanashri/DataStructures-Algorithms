// 1448. Count Good Nodes in Binary Tree

var goodNodes = function (root) {
  count = 0;

  const getCount = (node, max) => {
    if (!node) {
      return;
    }
    if (node.val >= max) {
      count++;
    }
    let max_ = Math.max(node.val, max);
    getCount(node.left, max_);
    getCount(node.right, max_);
  };

  getCount(root, -100000);
  return count;
};

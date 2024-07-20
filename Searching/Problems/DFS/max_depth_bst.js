// 104. Maximum depth of Binary Tree

var maxDepth = function (root) {
  return getHeight(root, 0);
};

function getHeight(root, h) {
  if (root == null) {
    return h;
  }
  return Math.max(getHeight(root.left, h + 1), getHeight(root.right, h + 1));
}

// 700. Search in a Binary Search Tree

var searchBST = function (root, val) {
  const search = (node) => {
    if (node == null) return null;

    if (node.val == val) return node;

    if (node.val > val) {
      return search(node.left);
    } else if (node.val < val) {
      return search(node.right);
    }
  };
  return search(root);
};

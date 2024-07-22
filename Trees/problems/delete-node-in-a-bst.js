var deleteNode = function (root, key) {
  if (!root) return null;

  if (root.val > key) root.left = deleteNode(root.left, key);

  if (root.val < key) root.right = deleteNode(root.right, key);

  if (root.val === key) {
    if (!root.left) return root.right;

    if (!root.right) return root.left;
    else {
      const minNode = getSmallest(root.right);
      minNode.left = root.left;
      return root.right;
    }
  }
  return root;
};
function getSmallest(node) {
  while (node.left) {
    node = node.left;
  }
  return node;
}

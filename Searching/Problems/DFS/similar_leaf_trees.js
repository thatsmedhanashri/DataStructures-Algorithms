// 872. Leaf-Similar Trees

var leafSimilar = function (root1, root2) {
  let leafValues1 = getLeafValues(root1);
  let leafValues2 = getLeafValues(root2);

  if (leafValues1.length !== leafValues2.length) {
    return false;
  }

  for (let i = 0; i < leafValues1.length; i++) {
    if (leafValues1[i] !== leafValues2[i]) {
      return false;
    }
  }

  return true;
};

function getLeafValues(root) {
  let leafs = [];

  const getLeafs = (node) => {
    if (node == null) {
      return;
    }
    if (node.left == null && node.right == null) {
      leafs.push(node.val);
    }
    getLeafs(node.left);
    getLeafs(node.right);
  };

  getLeafs(root);

  return leafs;
}

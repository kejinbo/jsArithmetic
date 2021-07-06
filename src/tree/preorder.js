// 先序遍历
// 先序遍历访问路径，根节点-》根节点的左子树-》根节点的右子树
const bt = require("./bt");

const preorder = (root) => {
  if (!root) return;
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
};

// 先序遍历非递归版
// const preorder = (root) => {
//   if (!root) return;
//   const stack = [root]; // 函数调用堆栈来实现
//   while (stack.length) {
//     const n = stack.pop();
//     console.log(n.val);
//     if (n.right) stack.push(n.right);
//     if (n.left) stack.push(n.left);
//   }
// };

preorder(bt);

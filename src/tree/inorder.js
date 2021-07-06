// 中序遍历
// 中序遍历访问路径，根节点的左子树-》根节点-》根节点的右子树
const bt = require("./bt");

const inorder = (root) => {
  if (!root) return;
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
};

// 中序遍历非递归版
// 在访问根节点前，栈中已经堆积了根节点左子树的内容。
// 先把根节点左子树的内容推入栈中。
// const inorder = (root) => {
//   if (!root) return;
//   const stack = [];
//   let p = root; // 创建一个指针，
//   while (stack.length || p) {
//     while (p) {
//       stack.push(p);
//       p = p.left;
//     }
//     const n = stack.pop();
//     console.log(n.val);
//     p = n.right;
//   }
// };

inorder(bt);

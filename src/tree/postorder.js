// 后序遍历
// 后序遍历访问路径，根节点的左子树-》根节点的右子树-》根节点
const bt = require("./bt");

const postorder = (root) => {
  if (!root) return;
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
};

// 后序遍历非递归版
// 后序遍历的顺序是左右根，我们可以倒过来，变成根右左，就变成了跟先序遍历很像的遍历
// const postorder = (root) => {
//   if (!root) return;
//   const stack = [root]; // 函数调用堆栈来实现
//   const outpotStack = []; // 用来保存先序遍历弹出的元素，再倒过来输出即可

//   while (stack.length) {
//     const n = stack.pop();
//     outpotStack.push(n);
//     if (n.left) stack.push(n.left);
//     if (n.right) stack.push(n.right);
//   }
//   while (outpotStack.length) {
//     const op = outpotStack.pop();
//     console.log(op.val);
//   }
// };

postorder(bt);

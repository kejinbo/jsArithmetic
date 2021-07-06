// 广度优先遍历
// 新建一个队列，把节点入队
// 把队头出队并访问
// 把队头的children挨个入队
// 重复第二，第三步，直到队列为空

const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: [],
        },
        {
          val: "e",
          children: [],
        },
      ],
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: [],
        },
        {
          val: "g",
          children: [],
        },
      ],
    },
  ],
};

const bfs = (root) => {
  const q = [root];
  while (q.length > 0) {
    const node = q.shift();
    console.log(node.val);
    node.children.forEach((child) => {
      q.push(child);
    });
  }
};
bfs(tree);

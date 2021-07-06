const json = {
  a: {
    b: {
      c: 1,
    },
  },
  d: [1, 2],
};
// 遍历json的所有节点值
const dfs = (n, path = []) => {
  console.log(n, path);
  Object.keys(n).forEach((item) => {
    dfs(n[item], path.concat(item));
  });
};
dfs(json, []);

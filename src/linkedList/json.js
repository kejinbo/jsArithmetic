// 使用链表指针获取json的节点值
const json = {
  a: {
    b: {
      c: 1,
    },
  },
};

const path = ["a", "b", "c"];
let p = json;
path.forEach((key) => {
  p = p[key];
});

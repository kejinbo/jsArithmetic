// 集合是一种无序且唯一的数据结构
// es6中有集合，名为set
// 集合的常用操作：去重，判断元素是否在集合中，交集，差集

// 去重
const arr = [1, 1, 2, 2, 4, 5, 6];
const arr2 = [...new Set(arr)];

// 判断元素是否在集合中
const set = new Set(arr);
const has = set.has(1);

// 求交集
const set2 = new Set([2, 3, 5, 6]);
const set3 = new Set([...set2].filter((item) => set.has(item)));
// 求差集
const diff = new Set([...set2].filter((item) => !set.has(item)));

// 迭代set
for (let [key, value] of set.entries()) {
  console.log(key, value);
}

// 归并排序
Array.prototype.mergeSort = function () {
  const rec = (arr) => {
    if (arr.length === 1) return arr;
    let mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);
    const orderLeft = rec(left);
    const orderRight = rec(right);

    const res = [];
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(orderLeft[0] > orderRight[0] ? orderRight.shift() : orderLeft.shift());
      } else if (orderLeft.length) {
        res.push(orderLeft.shift());
      } else if (orderRight.length) {
        res.push(orderRight.shift());
      }
    }
    return res;
  };
  const res = rec(this);
  res.forEach((n, i) => (this[i] = n));
};
const arr = [5, 3, 6, 4, 2, 1];
arr.mergeSort();
console.log(arr);
// 归并排序的时间复杂度
// 分的时间复杂度 O(logN)
// 合的时间复杂度 O(n)
// 时间复杂度：O( n * logN )
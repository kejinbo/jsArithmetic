// 快速排序
// 分区：从数组中任意选择一个“基准”，所有比基准小的放前面，比基准大的放后面
Array.prototype.quickSort = function () {
  const rec = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    const left = [];
    const right = [];
    const mid = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...rec(left), mid, ...rec(right)];
  };

  const res = rec(this);
  res.forEach((n, i) => (this[i] = n));
};
const arr = [5, 3, 6, 4, 2, 1];
arr.quickSort();
console.log(arr);

// 快速排序的时间复杂度

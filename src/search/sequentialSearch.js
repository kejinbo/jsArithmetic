// 顺序搜索
Array.prototype.sequentialSearch = function (val) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === val) {
      return i;
    }
  }
  return -1;
};

const res = [1, 2, 3, 4, 5, 6, 7, 8, 9].sequentialSearch(3);
console.log(res);
// 时间复杂度 O(n)

// 二分查找
// 数组必须是有序的
Array.prototype.binarySearch = function (val) {
  let low = 0;
  let high = this.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (this[mid] < val) {
      low = mid + 1;
    } else if (this[mid] > val) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

const res = [1, 2, 3, 4, 5, 6, 7, 8, 9].binarySearch(11);
console.log(res);
// 每次比较都使搜索范围缩小一半
// 所以时间复杂度是 O(logN)

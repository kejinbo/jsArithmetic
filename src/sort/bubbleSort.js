// 冒泡排序
// 相邻两个元素进行比较
Array.prototype.bubbleSort = function () {
  for (var i = 0; i < this.length - 1; i++) {
    for (var j = 0; j < this.length - i - 1; j++) {
      if (this[j] > this[j + 1]) {
        const temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
};
const arr = [5, 3, 6, 4, 2, 1];
arr.bubbleSort();
console.log(arr);

// 冒泡排序的时间复杂度
// 两个嵌套循环 时间复杂度是O(n^2)

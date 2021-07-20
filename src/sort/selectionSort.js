// 选择排序
// 每次取一个元素的下标。然后对用这个元素跟其他元素进行比较，找出最小（大）元素的下标
// 对这两个元素进行位置替换
Array.prototype.selectionSort = function () {
  for (var i = 0; i < this.length - 1; i++) {
    let minIndex = i;
    for (var j = i; j < this.length; j++) {
      if (this[minIndex] > this[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = this[i];
      this[i] = this[minIndex];
      this[minIndex] = temp;
    }
  }
};
const arr = [5, 3, 6, 4, 2, 1];
arr.selectionSort();
console.log(arr);
// 选择排序的时间复杂度
// 两个嵌套循环 时间复杂度是O(n^2)

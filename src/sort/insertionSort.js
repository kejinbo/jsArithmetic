// 插入排序
// 循环从第二个元素开始取。每次拿取出的元素跟前面排序的元素进行比较
// 将前面大于取出的元素往后移动，最后把取出的元素放置到前面的空位
Array.prototype.insertionSort = function () {
  for (var i = 1; i < this.length; i++) {
    const temp = this[i];
    let j = i;
    while (j > 0) {
      if (this[j - 1] > temp) {
        this[j] = this[j - 1];
      } else {
        break;
      }
      j--;
    }
    this[j] = temp;
  }
};
const arr = [5, 3, 6, 4, 2, 1];
arr.insertionSort();
console.log(arr);
// 插入排序的时间复杂度
// 两个嵌套循环 时间复杂度是O(n^2)

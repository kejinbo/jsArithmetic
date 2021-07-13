// 实现最小堆

class MinHeap {
  constructor() {
    this.heap = [];
  }
  getParentIndex(i) {
    // 下面代码等价于 Math.floot((i-1)/2)
    return (i - 1) >> 1;
  }
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }
  getRightChildIndex(i) {
    return 2 * i + 2;
  }
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  // 对新入的元素进行上移操作
  shiftUp(i) {
    if (i === 0) return; // 堆顶不进行则跳出
    const pIndex = this.getParentIndex(i);
    if (this.heap[pIndex] > this.heap[i]) {
      this.swap(pIndex, i);
      this.shiftUp(pIndex);
    }
  }
  // 删除堆顶，进行下移操作
  shiftDown(i) {
    const lcIndex = this.getLeftChildIndex(i);
    const rcIndex = this.getRightChildIndex(i);
    if (this.heap[lcIndex] < this.heap[i]) {
      this.swap(lcIndex, i);
      this.shiftDown(lcIndex);
    }
    if (this.heap[rcIndex] < this.heap[i]) {
      this.swap(rcIndex, i);
      this.shiftDown(rcIndex);
    }
  }
  // 向堆中新增元素
  insert(value) {
    this.heap.push(value);
    // 新增的值在数组末端，所以传数组的长度-1，即可对新入堆的元素进行排序
    this.shiftUp(this.heap.length - 1);
  }
  // 删除堆顶元素
  // 直接删除堆顶会破坏堆的结构
  // 将最后一个元素，弹出并替换到堆顶，再通过下移操作把的堆顶跟他的子节点进行比较交换。从而使结构正确
  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }
  // 获取堆顶
  peek() {
    return this.heap[0];
  }
  // 获取堆大小
  size() {
    return this.heap.length;
  }
}

const h = new MinHeap();
h.insert(3);
h.insert(2);
h.insert(1);
h.pop();
h.pop();

// 堆是一种特殊的完全二叉树。
// 所有的节点都大于等于（最大堆）或小于等于（最小堆）它的子节点

// js中通常用数表示堆
// 左侧子节点的位置 2*index + 1
// 右侧子节点的位置 2*index + 2
// 父节点位置是 (index - 1) / 2 (取 商)

// 堆的应用
// 1. 堆能高效、快速地找出最大值和最小值，时间复杂度：O(1)
// 2. 找出第K个最大（小）元素

// 例子
/**
 *         1
 *     3       6
 * 5       9       8
 * [1,3,6,5,9,8]
 */
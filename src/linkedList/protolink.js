// 原型链简介
// 1. 原型链的本质是链表
// 2. 原型链上的节点是个个原型对象，比如 Function.prototype, Objectprototype...
// 3. 原型链通过__proto__属性连接个个原型对象

// obj -> Object.prototype -> null
// func -> Function.prototype -> Object.prototype -> null
// arr -> Array.prototype -> Object.prototype -> null

const obj = {};
const func = () => {};
const arr = [];

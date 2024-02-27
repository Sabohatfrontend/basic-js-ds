const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  push(element) {
    this.items[this.length] = element;
    this.length++;
  }

  pop() {
    if (this.length === 0) return undefined;
    this.length--;
    let delElement = this.items[this.length];
    return delElement;
  }

  peek() {
    return this.items[this.length - 1];
  }
}

module.exports = {
  Stack
};

class Queue {
  elements = [];

  constructor() {}

  enqueue(v) {
    this.elements = [v, ...this.elements];
  }

  dequeue() {
    return this.elements.pop();
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}

export default Queue;

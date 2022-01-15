//For Dijkstra's

export class Heap {
  //distance, vertex_number
  vertices: [number, number][];

  constructor(vertex?: [number, number]) {
    this.vertices = !!vertex ? [vertex] : [];
  }

  getParent(index: number) {
    return this.vertices[Math.floor((index - 1) / 2)];
  }

  swap(index1: number, index2: number) {
    let temp = this.vertices[index1];
    this.vertices[index1] = this.vertices[index2];
    this.vertices[index2] = temp;
  }

  insert(data: [number, number]) {
    this.vertices.push(data);

    if (this.vertices.length === 1) {
      return;
    }

    let index = this.vertices.length - 1;

    while (index > 0 && this.getParent(index)[0] > data[0]) {
      this.swap(index, Math.floor((index - 1) / 2));
      index = Math.floor((index - 1) / 2);
    }

    this.vertices.map((v) => console.log(v, "post insert"));
  }

  removeMin() {
    const result = this.vertices[0];

    this.vertices[0] = this.vertices[this.vertices.length - 1];

    this.vertices.pop();

    let index = 0;

    while (2 * index + 1 < this.vertices.length) {
      if (2 * index + 2 === this.vertices.length) {
        if (this.vertices[index][0] > this.vertices[2 * index + 1][0]) {
          this.swap(index, 2 * index + 1);
        }
        return result;
      }

      if (this.vertices[2 * index + 1][0] > this.vertices[2 * index + 2][0]) {
        this.swap(index, 2 * index + 2);
        index = 2 * index + 2;
      } else {
        this.swap(index, 2 * index + 1);
        index = 2 * index + 1;
      }
    }

    console.log(result, this.vertices[0], "result");

    return result;
  }

  isEmpty() {
    return this.vertices.length === 0;
  }
}

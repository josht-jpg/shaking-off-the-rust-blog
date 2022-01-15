import Queue from "./dataStructures.ts/queue";
import { Vertex } from "./type/Vertex";

export class Graph {
  adjacencyList: Vertex[] = [];

  constructor() {}

  vertices() {
    return this.adjacencyList.filter((v) => v !== null);
  }

  adjacencyListNonNull() {
    return this.adjacencyList.filter((v) => v !== null);
  }

  addVertex() {
    this.adjacencyList.push([]);
  }

  addEgde(v1: number, v2?: number) {
    if (!!v2 || v2 === 0) {
      this.adjacencyList[v1].push([v2, 0]);
      this.adjacencyList[v2].push([v1, 0]);
    } else {
      this.adjacencyList[v1].push([v1, 0]);
    }
  }

  removeVertex(v: number) {
    this.adjacencyList = [
      ...this.adjacencyList.slice(0, v - 1),
      ...this.adjacencyList.slice(v),
    ];

    this.adjacencyList = this.adjacencyList.map((edgeList) =>
      edgeList?.filter((vPrime) => vPrime[0] !== v)
    );
  }

  removeEgde(v1: number, v2?: number, edgeIndex?: number) {
    /* if (!!v2 || v2 === 0) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    } else {
      this.adjacencyList[v1].push(v1);
    }*/
  }

  //--Mine--
  vertexDegree(v: number) {
    return this?.adjacencyList[v]?.length;
  }

  numberOfVertices() {
    return this.adjacencyList.length;
  }

  //--Mine--
  isRegular() {
    // Let k denote the degree of each node,
    // should the graph be regular
    const firstNonNullVertex = this.adjacencyList.findIndex((v) => !!v);
    const k = this.vertexDegree(firstNonNullVertex);
    for (const v of this.adjacencyList) {
      if (!!v && v.length !== k) {
        return false;
      }
    }
    return true;
  }

  //--Mine--
  isSimple() {
    for (const v1 of this.adjacencyList) {
      // if (!!v1) {
      const containsDuplicates = v1.length !== new Set(v1).size;
      if (containsDuplicates) {
        return false;
      }
      // }
    }
    return true;
  }

  dfs() {
    const visistedVertices = new Array(this.adjacencyList.length).fill(false);

    const dfs_ = (v: Vertex, index: number) => {
      if (visistedVertices[index]) {
        return;
      }
      visistedVertices[index] = true;

      v.map((neighbour) => {
        dfs_(this.adjacencyList[neighbour[0]], neighbour[0]);
      });
    };

    return this.adjacencyList.map((v, index) => dfs_(v, index));
  }

  bfs(startNode: number, endNode: number) {
    const search = () => {
      const queue = new Queue();
      queue.enqueue(startNode);
      const visistedVertices = new Array(this.adjacencyList.length).fill(false);
      visistedVertices[startNode] = true;

      let prev = new Array(this.adjacencyList.length).fill(null);
      while (!queue.isEmpty()) {
        const currentNode = queue.dequeue();
        this.adjacencyList[currentNode].map((v) => {
          if (!visistedVertices[v[0]]) {
            queue.enqueue(v);
            visistedVertices[v[0]] = true;
            prev[v[0]] = currentNode;
          }
        });
      }
      return prev;
    };

    const prev = search();
    let path = [];
    for (let at = endNode; at !== null; at = prev[at]) {
      path = [at, ...path];
    }

    if (path[0] === startNode) {
      return path;
    }
    return false;
  }

  isTree() {
    if (this.adjacencyList.length === 0) {
      return true;
    }
    const queue = new Queue();
    queue.enqueue(0);
    const visistedVertices = new Array(this.adjacencyList.length).fill(false);
    visistedVertices[0] = true;

    while (!queue.isEmpty()) {
      const currentNode = queue.dequeue();
      this.adjacencyList[currentNode].map((v) => {
        if (!visistedVertices[v[0]]) {
          queue.enqueue(v);
          visistedVertices[v[0]] = true;
        } else {
          return false;
        }
      });
    }

    return true;
  }

  //--Mine--
  numberOfComponents() {
    /*if (this.adjacencyList.length === 0) {
      return 0;
    }
    let visitedVertices = this.adjacencyList[0];
    let result = 1;
    for (let i = 1; i < this.adjacencyList.length; i++) {
      if (!this.adjacencyList[i].some((v) => visitedVertices.includes(v))) {
        result++;
      }
      visitedVertices.concat(this.adjacencyList[i]);
    }
    return result;
  }*/
  }
}

const G = new Graph();
export default G;

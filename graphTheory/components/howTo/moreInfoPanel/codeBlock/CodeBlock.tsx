import { useState } from "react";
import styles from "./CodeBlock.module.scss";

type LanguagesType = "Javascript" | "C" | "PYTHON" | "HASKELL";

const Languages = {
  JAVASCRIPT: "Javascript",
  C: "C",
  PYTHON: "PYTHON",
  HASKELL: "HASKELL",
};

const CodeBlock = () => {
  const [language, setLanguage] = useState(Languages.JAVASCRIPT);

  return (
    <div>
      <code className={styles.codeBlock}>
        {`dfs() {
    const visistedVertices = new Array(this.adjacencyList.length).fill(false);

    const dfs_ = (v: Vertex, index: number) => {
      if (visistedVertices[index]) {
        return;
      }
      visistedVertices[index] = true;

      v.map((neighbour) => {
        dfs_(this.adjacencyList[neighbour], neighbour);
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
          if (!visistedVertices[v]) {
            queue.enqueue(v);
            visistedVertices[v] = true;
            prev[v] = currentNode;
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
  `}
      </code>
    </div>
  );
};

export default CodeBlock;

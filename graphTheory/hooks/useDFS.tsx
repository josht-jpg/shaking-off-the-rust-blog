import * as d3 from "d3";
import { useContext, useEffect, useState } from "react";
import G from "../adjacencyList";
import { AnimateVerticesContext } from "../contexts/AnimateVerticesContext";

const useDFS = () => {
  const { animationSpeed, setAnimateVertices } = useContext(
    AnimateVerticesContext
  );

  const visistedVertices = new Array(G.vertices().length).fill(false);

  let stack = [0];
  let previousVertex = [0];
  let currentVertex;

  let skipAnimation = false;

  const [isRunning, setIsRunning] = useState(false);
  const [isStepInProgress, setIsStepInProgress] = useState(false);

  useEffect(() => {
    const search = () => {
      skipAnimation = false;

      if (visistedVertices.every((v) => v === true)) {
        setAnimateVertices([]);
        d3.selectAll("path").attr("opacity", "0.4");
        setIsRunning(false);
        setIsStepInProgress(false);
        console.log(animationSpeed);
        return;
      }

      //unnconnected
      if (stack.length === 0) {
        const nextUnvisitedVertex = visistedVertices.findIndex(
          (v) => v === false
        );
        currentVertex = nextUnvisitedVertex;
        stack.push(currentVertex);
      } else {
        currentVertex = stack[stack.length - 1];
      }

      if (visistedVertices[currentVertex]) {
        stack.pop();

        if (
          G.vertices()[previousVertex[previousVertex.length - 1]].every(
            (v) => visistedVertices[v[0]]
          )
        ) {
          previousVertex.pop();
        }

        //setTimeout(search, 100);
        setIsStepInProgress(false);
        skipAnimation = true;
        return false;
      }

      d3.select(
        `#line${currentVertex}to${
          previousVertex[previousVertex.length - 1]
        }Number1`
      ).attr("opacity", "1");
      d3.select(
        `#line${
          previousVertex[previousVertex.length - 1]
        }to${currentVertex}Number1`
      ).attr("opacity", "1");

      setAnimateVertices((prev) => [...prev, currentVertex]);
      visistedVertices[currentVertex] = true;

      !previousVertex.includes(currentVertex) &&
        previousVertex.push(currentVertex);

      stack = stack.concat(
        G.vertices()
          [currentVertex].slice()
          .reverse()
          .map((v) => v[0])
      );
      console.log(stack);
      setIsStepInProgress(false);
      //setTimeout(search, animationSpeed);
    };

    // console.log(isStepInProgress);

    if (!isStepInProgress && isRunning) {
      setTimeout(search, skipAnimation ? 20 : animationSpeed);
      setIsStepInProgress(true);
    }
  }, [animationSpeed, isRunning, isStepInProgress]);

  return () => {
    setIsStepInProgress(false);
    setIsRunning(true);
  };
};

export default useDFS;

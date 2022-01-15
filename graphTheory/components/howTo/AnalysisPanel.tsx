import { useContext, useEffect, useState } from "react";
import G from "../../adjacencyList";
import { AnimateVerticesContext } from "../../contexts/AnimateVerticesContext";
import IsLightModeContext from "../../contexts/IsLightModeContext";
import * as d3 from "d3";
import Button from "../button/Button";
import CheckBoxField from "../FSMpieces/stateNode/stateAttributes/checkBoxField/CheckBoxField";
import styles from "./AnalysisPanel.module.scss";
import CSSColors from "../../utils/CSSColors";
import { PRIMARY_COLOR } from "../../constants/styleConstants";
import Queue from "../../dataStructures.ts/queue";
import { BsArrowRight } from "react-icons/bs";
import MoreInfoPanel from "./moreInfoPanel/MoreInfoPanel";
import Select from "react-select";
import StateMahcineOption from "../editorPanel/stateMachineOption/StateMachineOption";
import useDFS from "../../hooks/useDFS";
import { Heap } from "../../dataStructures.ts/heap";
import ShortestPathPanel from "./shortestPathsPanel/ShortestPathsPanel";

const analysisOptions = {
  SIMPLE: "Is my graph simple?",
  REGULAR: "Is my graph regular?",
  DFS: "Run Depth First Search on my Graph",
  BFS: "Run Breadth First Search on my Graph",
  NUMBER_OF_COMPONENTS: "Find the number of components on my graph",
  TREE: "Is my graph a tree?",
  SSSP: "Single Source Shortest Path",
};

const AnalysisPanel = () => {
  const isLightMode = useContext(IsLightModeContext);

  const {
    animateVertices,
    setAnimateVertices,
    setStopAnimationVertex,
    showPseudoCode,
    setShowPseudoCode,
    animationSpeed,
    setAnimationSpeed,
    setAnimationColors,
  } = useContext(AnimateVerticesContext);

  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const [startNode, setStartNode] = useState(0);
  const [endNode, setEndNode] = useState(Math.max(0, G.vertices().length - 1));
  useEffect(() => {
    setEndNode(Math.max(0, G.vertices().length - 1));
  }, [G, setEndNode]);

  const [shortestPaths, setShortestPaths] = useState<number[]>([]);
  const [showShortestPaths, setShowShortestPaths] = useState(false);

  const [analysisType, setAnalysisType] = useState(analysisOptions.SSSP);

  const dfs = useDFS();

  const runAlgorithm = () => {
    switch (analysisType) {
      case analysisOptions.REGULAR:
        animations.isRegular(
          setStopAnimationVertex,
          setAnimateVertices,
          animationSpeed
        );
        break;
      case analysisOptions.BFS:
        animations.bfs(
          startNode,
          endNode,
          setAnimateVertices,
          setAnimationColors,
          animationSpeed
        );
        break;
      case analysisOptions.NUMBER_OF_COMPONENTS:
        animations.numComponentsWithColor(
          setAnimationColors,
          setAnimateVertices,
          animationSpeed
        );
        break;
      case analysisOptions.DFS:
        dfs();
        //animations.dfs(setAnimateVertices, animationSpeed);
        break;
      case analysisOptions.TREE:
        animations.isTree(setAnimateVertices, animationSpeed);
        break;
      case analysisOptions.SSSP:
        animations.SSSP(
          startNode,
          setAnimateVertices,
          setAnimationColors,
          animationSpeed,
          setShortestPaths,
          setShowShortestPaths
        );
        break;
    }
  };

  return (
    <>
      {showMoreInfo && (
        <MoreInfoPanel handleClose={() => setShowMoreInfo(false)} />
      )}
      {showShortestPaths && (
        <ShortestPathPanel
          shortestPaths={shortestPaths}
          handleClose={() => {
            setShowShortestPaths(false);
            setAnimateVertices([]);
            setAnimationColors([]);
            d3.selectAll("path").attr("opacity", "0.4");
          }}
        />
      )}
      <div
        className={styles.howToContainer}
        style={{ boxShadow: !isLightMode && "white 0 0 9px" }}
      >
        <h2 style={{ marginBottom: "0" }}>Graph Analysis</h2>
        <hr style={{ marginTop: "4", marginBottom: "25px", width: "78%" }} />
        {/* 
        <strong style={{ fontSize: "1.18rem" }}>
          Is graph regular? {G.isRegular() ? " Yes" : " No"}
        </strong>
        <br />
        <br />
        <strong style={{ fontSize: "1.18rem" }}>
          Is graph simple? {G.isSimple() ? " Yes" : " No"}
        </strong>
        <br />
        <br />
        <strong style={{ fontSize: "1.18rem" }}>
          Is graph a Tree? {G.isTree() ? " Yes" : " No"}
        </strong>
        <br />
        <br />

        <strong style={{ fontSize: "1.18rem" }}>
          Number of components: {G.numberOfComponents()}
        </strong>
        <br />
        <br />
      <br />*/}
        <label className={styles.selectLabel}>Select Analysis Type</label>
        <Select
          style={{ width: "203px" }}
          className="basic-single"
          classNamePrefix="select"
          name="State Machine"
          defaultValue={{
            label: analysisType,
            value: analysisType,
          }}
          options={Object.values(analysisOptions).map((option) => ({
            label: (
              <StateMahcineOption stateMachine={option} isSelected={false} />
            ),
            value: option,
          }))}
          onChange={(e) => setAnalysisType(e.value)}
        />
        {(analysisType === analysisOptions.BFS ||
          analysisType === analysisOptions.SSSP) && (
          <div>
            <label>Start Node:</label>
            <input
              type="number"
              name="startNode"
              value={startNode}
              onChange={(e) => setStartNode(e.target.valueAsNumber)}
              min="0"
              max={G.vertices().length - 1}
            />
            <label>End Node:</label>
            <input
              type="number"
              name="endNode"
              value={endNode}
              onChange={(e) => setEndNode(e.target.valueAsNumber)}
              min={0}
              max={G.vertices().length - 1}
            />
          </div>
        )}

        <Button type={"Run Algorithm"} action={() => runAlgorithm()}></Button>

        <CheckBoxField
          buttonTitle={"Show Psuedo Code"}
          buttonText={"Show Psuedo Code"}
          isDisabled={false}
          isChecked={showPseudoCode}
          handleClick={() => setShowPseudoCode((prev) => !prev)}
        />
        <br />
        <br />
        <label>
          <strong>Speed</strong>
        </label>
        <br />
        <input
          // id="speend"
          type="range"
          min="50"
          max="750"
          value={animationSpeed}
          onChange={(e) => setAnimationSpeed(e.target.valueAsNumber)}
          step="10"
        />

        <br />
        <br />
        <button
          className={styles.moreInfoButton}
          onClick={() => setShowMoreInfo(true)}
        >
          <strong style={{ fontSize: "1.15rem" }}>
            {`More About ${analysisType}`} <BsArrowRight />
          </strong>
        </button>
      </div>
    </>
  );
};

export default AnalysisPanel;

const animations = {
  isRegular: (setStopAnimationVertex, setAnimateVertices, animationSpeed) => {
    const k = G.vertexDegree(0);

    let i = 0;
    let stop = false;

    const animate = () => {
      if (stop) {
        clearInterval(timerId);
        setStopAnimationVertex(undefined);
        setAnimateVertices([]);
      } else if (i < G.vertices().length) {
        setAnimateVertices((prev) => [...prev, i]);

        if (G.vertices()[i].length !== k) {
          setStopAnimationVertex(i);
          stop = true;
        }
      } else {
        setAnimateVertices([]);
        setStopAnimationVertex(undefined);
        clearInterval(timerId);
      }
      i++;
    };

    const timerId = setInterval(animate, animationSpeed);
  },

  //dfs: useDFS(setAnim),

  numComponentsWithColor: (
    setAnimationColors,
    setAnimateVertices,
    animationSpeed
  ) => {
    const visistedVertices = new Array(G.vertices().length).fill(false);
    const animationColorsInit = new Array(G.vertices().length).fill(
      PRIMARY_COLOR
    );
    setAnimationColors(animationColorsInit);

    let stack = [0];
    let previousVertices = [0];
    let numberOfComponents = 1;
    let currentVertex;

    const dfs = () => {
      if (visistedVertices.every((v) => v === true)) {
        setAnimateVertices([]);
        setAnimationColors([]);

        d3.selectAll("path").attr("opacity", "0.4");
        return;
      }

      if (stack.length === 0) {
        const nextUnvisitedVertex = visistedVertices.findIndex(
          (v) => v === false
        );
        currentVertex = nextUnvisitedVertex;
        stack.push(currentVertex);
        numberOfComponents++;
      } else {
        currentVertex = stack[stack.length - 1];
      }

      setAnimationColors((prev) => {
        let temp = prev;
        temp[currentVertex] = CSSColors[numberOfComponents + 10];
        return temp;
      });

      if (visistedVertices[currentVertex]) {
        stack.pop();
        if (
          G.vertices()[previousVertices[previousVertices.length - 1]]?.every(
            (v) => visistedVertices[v[0]]
          )
        ) {
          previousVertices.pop();
        }
        setTimeout(dfs, 100);
        return;
      }

      d3.select(
        `#line${currentVertex}to${
          previousVertices[previousVertices.length - 1]
        }Number1`
      ).attr("opacity", "1");
      d3.select(
        `#line${
          previousVertices[previousVertices.length - 1]
        }to${currentVertex}Number1`
      ).attr("opacity", "1");

      !previousVertices.includes(currentVertex) &&
        previousVertices.push(currentVertex);
      setAnimateVertices((prev) => [...prev, currentVertex]); // below
      visistedVertices[currentVertex] = true;
      stack = stack.concat(
        G.vertices()
          [currentVertex].slice()
          .reverse()
          .map((v) => v[0])
      );
      setTimeout(dfs, animationSpeed);
    };

    setTimeout(dfs, animationSpeed);
  },

  bfs(
    startNode,
    endNode,
    setAnimateVertices,
    setAnimationColors,
    animationSpeed
  ) {
    const queue = new Queue();

    console.log(startNode, "startnode");

    queue.enqueue(startNode);
    setAnimateVertices([startNode]);
    const animationColorsInit = new Array(G.vertices().length).fill(
      PRIMARY_COLOR
    );
    setAnimationColors(animationColorsInit);

    const visistedVertices = new Array(G.numberOfVertices()).fill(false);
    visistedVertices[startNode] = true;
    let previousVertices = new Array(G.numberOfVertices()).fill(null);

    let layers = 0;

    const search = () => {
      if (queue.isEmpty() || visistedVertices[endNode]) {
        d3.selectAll("path").attr("opacity", "0.4");
        setAnimateVertices([]);
        setAnimationColors([]);
      } else {
        //
        const currentNode = queue.dequeue();

        if (G.vertices()[currentNode].every((v) => visistedVertices[v[0]])) {
          setTimeout(search, 0);
          return;
        }

        G.vertices()[currentNode].map((v) => {
          if (!visistedVertices[v[0]]) {
            queue.enqueue(v[0]);

            d3.select(`#line${currentNode}to${v[0]}Number1`).attr(
              "opacity",
              "1"
            );
            d3.select(`#line${v[0]}to${currentNode}Number1`).attr(
              "opacity",
              "1"
            );

            setAnimationColors((prev) => {
              let temp = prev;
              temp[v[0]] =
                endNode === v[0] ? "#24EB00" : CSSColors[layers + 12];
              return temp;
            });

            setAnimateVertices((prev) => [...prev, v[0]]);

            visistedVertices[v[0]] = true;
            previousVertices[v[0]] = currentNode;
          }
        });
        layers++;
        setTimeout(search, animationSpeed);
      }
    };

    setTimeout(search, animationSpeed);

    // const prev = search();
    let path = [];
    for (let at = endNode; at !== null; at = previousVertices[at]) {
      path = [at, ...path];
    }

    if (path[0] === startNode) {
      return path;
    }
    return false;
  },

  isTree(setAnimateVertices, animationSpeed) {
    const visistedVertices = new Array(G.vertices().length).fill(false);

    let stack = [0];
    let previousVertex = [0];
    let traversedEdges = [];
    let currentVertex;
    let skipAnimation;

    const dfs = () => {
      skipAnimation = false;
      if (visistedVertices.every((v) => v === true)) {
        setAnimateVertices([]);
        d3.selectAll("path").attr("opacity", "0.4");
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

      /* setAnimationColors((prev) => {
        let temp = prev;
        temp[currentVertex] = CSSColors[numberOfComponents + 10];
        return temp;
      });*/

      if (visistedVertices[currentVertex]) {
        if (
          traversedEdges.every(
            (e) =>
              !e.includes(previousVertex[previousVertex.length - 1]) ||
              !e.includes(currentVertex)
          )
        ) {
          setAnimateVertices([]);
          d3.selectAll("path").attr("opacity", "0.4");
          return;
        }

        stack.pop();

        if (
          G.vertices()[previousVertex[previousVertex.length - 1]].every(
            (v) => visistedVertices[v[0]]
          )
        ) {
          previousVertex.pop();
        }

        setTimeout(dfs, 100);
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

      traversedEdges.push([
        previousVertex[previousVertex.length - 1],
        currentVertex,
      ]);

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
      setTimeout(dfs, animationSpeed);
    };

    setTimeout(dfs, animationSpeed);
  },

  SSSP: (
    startNode,
    setAnimateVertices,
    setAnimationColors,
    animationSpeed,
    setShortestPaths,
    setShowShortestPaths
  ) => {
    setAnimateVertices([startNode]);
    const animationColorsInit = new Array(G.vertices().length).fill(
      PRIMARY_COLOR
    );
    setAnimationColors(animationColorsInit);

    let distances = new Array(G.numberOfVertices()).fill(Infinity);
    distances[startNode] = 0;

    const pq = new Heap([0, startNode]);

    const search = () => {
      if (pq.isEmpty()) {
        //d3.selectAll("path").attr("opacity", "0.4");
        //setAnimateVertices([]);
        //setAnimationColors([]);
        setShortestPaths(distances);
        setShowShortestPaths(true);
        return;
      } else {
        const [currentDistance, currentVertex] = pq.removeMin();

        /*getAllElementsByType("path").map((edge: any) => {
          const id = edge.getAttribute("id");
          if (!!id) {
            const { v1, v2 } = getVerticesFromEdgeId(id);
            console.log(v1, v2, currentVertex);
            if (v1 === currentVertex || v2 === currentVertex) {
              d3.select("#" + id).attr("opacity", "1");
            }
          }
        });*/

        setAnimateVertices((prev) => [...prev, currentVertex]);

        if (currentDistance <= distances[currentVertex]) {
          G.vertices()[currentVertex].map((edge) => {
            const distance = currentDistance + edge[1];

            d3.select(`#line${currentVertex}to${edge[0]}Number1`).attr(
              "opacity",
              "1"
            );

            d3.select(`#line${edge[0]}to${currentVertex}Number1`).attr(
              "opacity",
              "1"
            );

            if (distance < distances[edge[0]]) {
              distances[edge[0]] = distance;
              pq.insert([distance, edge[0]]);
            }
          });
        }
        setTimeout(search, animationSpeed);
      }
    };

    setTimeout(search, animationSpeed);
  },
};

import { useEffect, useRef, useState } from "react";
import Latex from "react-latex-next";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";
import CodeBlock from "./codeBlock/CodeBlock";
import styles from "./MoreInfoPanel.module.scss";

interface MoreInfoPanelProps {
  handleClose: () => void;
}

const MoreInfoPanel: React.FC<MoreInfoPanelProps> = ({ handleClose }) => {
  const [width, setWidth] = useState("0");

  useEffect(() => {
    setTimeout(() => setWidth("20vw"), 1);
  }, []);

  const ref = useRef();
  useOutsideAlerter(ref, handleClose);

  return (
    <div ref={ref} className={styles.moreInfoPanel} style={{ width }}>
      <div>
        <p>TODO: This is copy-pasted for Wikipedia - write ur own</p>
        <p>
          <strong>Breadth-first search</strong> (<strong>BFS</strong>) is an{" "}
          <a href="https://en.wikipedia.org/wiki/Algorithm">algorithm</a> for
          searching a{" "}
          <a href="https://en.wikipedia.org/wiki/Tree_(data_structure)">tree</a>{" "}
          data structure for a node that satisfies a given property. It starts
          at the{" "}
          <a href="https://en.wikipedia.org/wiki/Tree_(data_structure)#Terminology">
            tree root
          </a>{" "}
          and explores all nodes at the present{" "}
          <a href="https://en.wikipedia.org/wiki/Tree_(data_structure)#Terminology">
            depth
          </a>{" "}
          prior to moving on to the nodes at the next depth level. Extra memory,
          usually a{" "}
          <a href="https://en.wikipedia.org/wiki/Queue_(data_structure)">
            queue
          </a>
          , is needed to keep track of the child nodes that were encountered but
          not yet explored.
        </p>
        <p>
          For example, in a{" "}
          <a href="https://en.wikipedia.org/wiki/Chess_endgame">
            chess endgame
          </a>{" "}
          a{" "}
          <a href="https://en.wikipedia.org/wiki/Chess_engine">chess engine</a>{" "}
          may build the{" "}
          <a href="https://en.wikipedia.org/wiki/Game_tree">game tree</a> from
          the current position by applying all possible moves, and use
          breadth-first search to find a win position for white. Implicit trees
          (such as game trees or other problem-solving trees) may be of infinite
          size; breadth-first search is guaranteed to find a solution node
          <a href="https://en.wikipedia.org/wiki/Breadth-first_search#cite_note-1">
            [1]
          </a>{" "}
          if one exists.
        </p>
        <p>
          In contrast, (plain){" "}
          <a href="https://en.wikipedia.org/wiki/Depth-first_search">
            depth-first search
          </a>
          , which explores the node branch as far as possible before
          backtracking and expanding other nodes,
          <a href="https://en.wikipedia.org/wiki/Breadth-first_search#cite_note-2">
            [2]
          </a>{" "}
          may get lost in an infinite branch and never make it to the solution
          node.{" "}
          <a href="https://en.wikipedia.org/wiki/Iterative_deepening_depth-first_search">
            Iterative deepening depth-first search
          </a>{" "}
          avoids the latter drawback at the price of exploring the tree&#x27;s
          top parts over and over again. On the other hand, both depth-first
          algorithms get along without extra memory.
        </p>
        <p>
          Breadth-first search can be generalized to{" "}
          <a href="https://en.wikipedia.org/wiki/Graph_(data_structure)">
            graphs
          </a>
          , when the start node (sometimes referred to as a &#x27;search
          key&#x27;)
          <a href="https://en.wikipedia.org/wiki/Breadth-first_search#cite_note-3">
            [3]
          </a>{" "}
          is explicitly given, and precautions are taken against following a
          vertex twice.
        </p>

        <ul>
          <li>
            <strong>Time Complexity:</strong> <Latex>{"O(V + E)"}</Latex>
          </li>
        </ul>
        <ul>
          <li>
            <strong>Applications: </strong>
            <ul>
              <li>Shortest path in an unweighted graph</li>
            </ul>
            <ul>
              <li>GPS navigation</li>
            </ul>
            <p></p>
          </li>
        </ul>
        <CodeBlock />
      </div>
    </div>
  );
};

export default MoreInfoPanel;

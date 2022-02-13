import React, { useContext, useState } from "react";
import Head from "next/head";
import EditorPanel from "./editorPanel/EditorPanel";
import StateNodeContext from "../contexts/StateNodeContext";
import StateNodesContext from "../contexts/StateNodesContext";
import IsDraggingContext from "../contexts/IsDraggingContext";
import IsShiftKeyPressedContext from "../contexts/IsShiftKeyPressed";
import { useEffect } from "react";
import Input from "./FSMpieces/input/Input";
import CreateInputContext from "../contexts/CreateInputContext";
import MouseOverNodeContext from "../contexts/MouseOverNodeContenxt";
import indexOfStateMouseIsOverContext from "../contexts/indexOfStateMouseIsOver";
import { useRef } from "react";
import * as d3 from "d3";
import MainSvgOffSetContext from "../contexts/MainSvgOffSet";
import StartStateContext from "../contexts/StartStateContext";
import startInputId from "../utils/startInputId";
import HowTo from "./howTo/AnalysisPanel";
import createInputsFromLocalStorage from "../utils/createInputsFromLocalStorage";
import EditArea from "./edtiArea/EditArea";
import {
  DARK_MODE_BACKGROUND,
  LIGHT_MODE_BACKGROUND,
  TRANSITION_TIME,
} from "../constants/styleConstants";
import { getInputIdsFromStorage } from "../utils/inputUtils";
import { AdjacencyListProvider } from "../contexts/AdjacencyListProvider";
import { AnimateVerticesProvider } from "../contexts/AnimateVerticesContext";
import DropDown from "./dropDown/DropDown";
import { LastDeletedVertexContext } from "../contexts/LastDeletedVertex";
import { VertexPositionsProvider } from "../contexts/VertexPositionsProvider";
import CreatedStateNode from "./FSMpieces/stateNode/CreatedStateNode";
import removeWhiteSpace from "../utils/removeWhiteSpace";
import { NodeLabelsContext } from "../contexts/NodeLabelsProvider";
import { IsLightModeContext } from "../../context/IsLightModeProvider";
import { MainSvgIdContext } from "../contexts/MainSvgIdProvider";

type createInput = {
  x: number;
  y: number;
  startNodeIndex: number;
};

interface LayoutProps {
  title?: string;
  example?: string;
}

const Layout: React.FC<LayoutProps> = ({ title = "FSM Builder", example }) => {
  const [isMouseInEditArea, setIsMouseInEditArea] = useState(false);

  const stateNodesState = useState([]);
  const [stateNodes, setStateNodes] = stateNodesState;

  const [isStateNodeDragging, setIsStateNodeDragging] = useState(false);

  const [isShiftPressed, setIsShiftPressed] = useState(false);

  const handleKeyDown = (e: KeyboardEvent) =>
    e.code?.includes("Shift") && setIsShiftPressed(true);
  const handleKeyup = (e: KeyboardEvent) => {
    if (e.code?.includes("Shift")) {
      setIsShiftPressed(false);
      setCreateInput(undefined);
    }
  };

  const addKeyEventListeners = () => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyup);
  };

  const setBackgroundColorTransitionTime = () => {
    document.body.style.transition = `background-color ${TRANSITION_TIME}`;
  };

  useEffect(() => {
    addKeyEventListeners();
    setBackgroundColorTransitionTime();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyup);
    };
  }, []);

  const [createInput, setCreateInput] = useState<createInput | undefined>(
    undefined
  );

  const [mainSvgOffSet, setMainSvgOffSet] = useState<any>(undefined);
  const mainSvgRef = useRef<any>();

  useEffect(() => {
    setMainSvgOffSet({
      x: mainSvgRef?.current?.getBoundingClientRect().left,
      y: mainSvgRef?.current?.getBoundingClientRect().top,
    });
  }, [mainSvgRef, setMainSvgOffSet]);

  const [mouseOverNodePosition, setMouseOverNodePosition] = useState(undefined);

  const [constructionInput, setConstructionInput] = useState<any>();

  const createdInputIdsState = useState<string[]>([]);
  const [createdInputIds, setCreatedInputIds] = createdInputIdsState;

  const startIndexState = useState<number | undefined>();
  const [startIndex, setStartIndex] = startIndexState;

  const { setNodeLabels } = useContext(NodeLabelsContext);

  useEffect(() => {
    // example === ALPACA

    if (!!example) {
      //TODO: extract examples to a hashmap
      setStateNodes(
        JSON.parse(
          `[{"x":719.75,"y":57.46875,"stateName":"You","color":"","isFinalState":false,"textColor":"","outlineColor":"","initialX":829.75,"initialY":182.46875},{"x":891.75,"y":320.46875,"stateName":"Greg","color":"","isFinalState":false,"textColor":"","outlineColor":"","initialX":855.75,"initialY":482.46875},{"x":1144.75,"y":71.46875,"stateName":"Ruth","color":"","isFinalState":false,"textColor":"","outlineColor":"","initialX":1163.75,"initialY":269.46875},{"x":1189.75,"y":282.46875,"stateName":"Santiago","color":"","isFinalState":false,"textColor":"","outlineColor":"","initialX":1260.75,"initialY":461.46875},{"x":1194.75,"y":554.46875,"stateName":"Jim","color":"","isFinalState":false,"textColor":"","outlineColor":"","initialX":1298.75,"initialY":697.46875},{"x":750.75,"y":675.46875,"stateName":"Diya","color":"","isFinalState":false,"textColor":"","outlineColor":"","initialX":908.75,"initialY":737.46875},{"x":1487.75,"y":56.46875,"stateName":"Jessica","color":"","isFinalState":false,"textColor":"","outlineColor":""}]`
        ).map((node, index) => (
          <CreatedStateNode
            x={node.x /*+ mainSvgRef?.current?.getBoundingClientRect().left*/}
            y={node.y /*+ mainSvgRef?.current?.getBoundingClientRect().top*/}
            index={index}
            savedAttributes={node}
            example={example}
          />
        ))
      );

      //TODO: I think I got the wrong names
      setNodeLabels([
        "You",
        "Greg",
        "Ruth",
        "Santiago",
        "Jim",
        "Diya",
        "Jessica",
        "Megan",
      ]);
      //TODO: dev code
    } else if (false) {
      setStateNodes(
        (JSON.parse(localStorage.getItem("stateNodes")) ?? []).map(
          (node, index) =>
            !node.hidden && (
              <CreatedStateNode
                x={node.x + mainSvgRef?.current?.getBoundingClientRect().left}
                y={node.y + mainSvgRef?.current?.getBoundingClientRect().top}
                index={index}
                savedAttributes={node}
              />
            )
        )
      );

      setNodeLabels(
        (JSON.parse(localStorage.getItem("stateNodes")) ?? [])
          .filter((node) => !node.hidden)
          .map((node) => node.stateName)
      );
    }
  }, [setStateNodes, mainSvgRef]);

  const { lastDeletedVertex } = useContext(LastDeletedVertexContext);
  useEffect(() => {
    d3.select(`container${lastDeletedVertex}`).remove();

    createdInputIds.map((id) => {
      const vertices = id.match(/^\d+|\d+\b|\d+(?=\w)/g);
      const v1 = parseInt(vertices[0]);
      const v2 = parseInt(vertices[1]);
      if (v1 === lastDeletedVertex || v2 === lastDeletedVertex) {
        d3.select(id.replace("Number", "Marker")).remove();
        d3.select(id).remove();
      }
    });

    setCreatedInputIds((prev) =>
      prev
        .filter((id) => {
          const vertices = id.match(/^\d+|\d+\b|\d+(?=\w)/g);
          const v1 = parseInt(vertices[0]);
          const v2 = parseInt(vertices[1]);
          return v1 !== lastDeletedVertex && v2 !== lastDeletedVertex;
        })
        .map((id) => {
          const vertices = id.match(/^\d+|\d+\b|\d+(?=\w)/g);

          const v1 = parseInt(vertices[0]);
          const v2 = parseInt(vertices[1]);

          const oldId = id;

          //Problems with double digits
          if (v1 > lastDeletedVertex) {
            id = id.replace(v1.toString(), (v1 - 1).toString());
          }
          if (v2 > lastDeletedVertex) {
            id = id.replace(v2.toString(), (v2 - 1).toString());
          }

          d3.select(oldId).attr("id", id.replace("#", ""));

          d3.select(id.replace("Number", "Marker")).attr(
            "id",
            id.replace("#", "").replace("Number", "Marker")
          );

          return id;
        })
    );
  }, [lastDeletedVertex]);

  const { mainSvgId } = useContext(MainSvgIdContext);

  useEffect(() => {
    if (!!example) {
      const createPath = (input) =>
        d3
          .select("#mainSVGExample")
          .append("path")
          .attr("id", input.id)
          .attr("class", "input")
          .attr("d", input.d)
          .attr("marker-end", `url(#${input.id}marker)`)
          .attr("stroke", removeWhiteSpace(input.color) ?? "gray")
          .attr("opacity", "0.4")
          .attr("filter", "drop-shadow(2px 2px 2px rgb(0 0 0 / 0.2))")
          .attr("stroke-width", "3px")
          .attr("width", "3px")
          .attr("fill", "none")
          .attr("cursor", "pointer");

      JSON.parse(
        `[{"id":"exampleline0to1Number1","d":"M 490.65625 126.03125 Q 240.59375 191 335.90625 351.5625","name":""},{"id":"exampleline0to2Number1","d":"M 790.65625 126.03125 Q 451.90625 183.5625 577.90625 130.5625","name":""},{"id":"exampleline0to5Number1","d":"M 490.65625 126.03125 Q 247.90625 636.5625 211.90625 693.5625","name":""},{"id":"exampleline5to4Number1","d":"M 521.65625 743.03125 Q 500.59375 597 628.90625 609.5625","name":""},{"id":"exampleline1to4Number1","d":"M 662.65625 389.03125 Q 522.59375 574 634.90625 590.5625","name":""},{"id":"exampleline4to3Number1","d":"M 965.65625 623.03125 Q 591.59375 505 652.90625 377.5625","name":""},{"id":"exampleline3to6Number1","d":"M 660.65625 352.03125 Q 930.90625 139.5625 930.90625 139.5625","name":""}]`
      ).map((input) => createPath(input));

      const inputIds = JSON.parse(
        `[{"id":"exampleline0to1Number1","d":"M 190.65625 126.03125 Q 240.59375 191 335.90625 351.5625","name":""},{"id":"exampleline0to2Number1","d":"M 190.65625 126.03125 Q 451.90625 183.5625 577.90625 130.5625","name":""},{"id":"exampleline0to5Number1","d":"M 190.65625 126.03125 Q 247.90625 636.5625 211.90625 693.5625","name":""},{"id":"exampleline5to4Number1","d":"M 221.65625 743.03125 Q 500.59375 597 628.90625 609.5625","name":""},{"id":"exampleline1to4Number1","d":"M 362.65625 389.03125 Q 522.59375 574 634.90625 590.5625","name":""},{"id":"exampleline4to3Number1","d":"M 665.65625 623.03125 Q 591.59375 505 652.90625 377.5625","name":""},{"id":"exampleline3to6Number1","d":"M 660.65625 352.03125 Q 930.90625 139.5625 930.90625 139.5625","name":""}]`
      ).map((input) => "#" + input.id);

      setCreatedInputIds(inputIds);
    } else {
      false && createInputsFromLocalStorage(mainSvgId);
      false &&
        setCreatedInputIds(getInputIdsFromStorage().map((id) => "#" + id));
    }
  }, [mainSvgRef, setCreatedInputIds]);

  useEffect(() => {
    if (startIndex !== undefined) {
      setCreatedInputIds((prev) =>
        !prev.includes(startInputId(startIndex))
          ? [...prev, startInputId(startIndex)]
          : prev
      );
    } else {
      setCreatedInputIds((prev) =>
        prev.filter((id) => id !== startInputId(startIndex))
      );
    }
  }, [startIndex, setCreatedInputIds]);

  useEffect(() => {
    if (isShiftPressed && createInput) {
      setConstructionInput(
        <Input
          startPosition={{ x: createInput.x, y: createInput.y }}
          startNodeIndex={createInput.startNodeIndex}
          setConstructionInput={setConstructionInput}
          createdInputIdsState={createdInputIdsState}
        />
      );
      setCreateInput(undefined);
    }
  }, [
    isShiftPressed,
    createInput,
    mouseOverNodePosition,
    createInput?.x,
    createInput?.y,
  ]);

  // const [isLightMode, setIsLightMode] = useState(true);

  const { isLightMode } = useContext(IsLightModeContext);

  useEffect(() => {
    document.body.style.backgroundColor = isLightMode
      ? LIGHT_MODE_BACKGROUND
      : DARK_MODE_BACKGROUND;

    const changeTextColor = () =>
      Array.from(d3.selectAll("text")._groups[0])?.map((text: any) => {
        if (text.getAttribute("fill") === "black" && !isLightMode) {
          text.setAttribute("fill", "white");
        } else if (text.getAttribute("fill") === "white" && isLightMode) {
          text.setAttribute("fill", "black");
        }
      });
    changeTextColor();
  }, [isLightMode]);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
          rel="stylesheet"
        />
      </Head>

      <main
        id="main"
        style={{
          display: "flex",
          transition: "350ms",
        }}
      >
        <AdjacencyListProvider>
          <AnimateVerticesProvider>
            <VertexPositionsProvider>
              <StateNodesContext.Provider value={stateNodesState}>
                <StateNodeContext.Provider value={isMouseInEditArea}>
                  <IsDraggingContext.Provider value={setIsStateNodeDragging}>
                    <IsShiftKeyPressedContext.Provider value={isShiftPressed}>
                      <CreateInputContext.Provider value={setCreateInput}>
                        <MouseOverNodeContext.Provider
                          value={setMouseOverNodePosition}
                        >
                          <indexOfStateMouseIsOverContext.Provider
                            value={mouseOverNodePosition}
                          >
                            <MainSvgOffSetContext.Provider
                              value={mainSvgOffSet}
                            >
                              <StartStateContext.Provider
                                value={startIndexState}
                              >
                                {!example && <DropDown />}
                                {!example && <EditorPanel />}
                                {!example && <HowTo />}
                                <EditArea
                                  setIsMouseInEditArea={setIsMouseInEditArea}
                                  mainSvgRef={mainSvgRef}
                                  constructionInput={constructionInput}
                                  createdInputIds={createdInputIds}
                                  stateNodes={stateNodes}
                                  cursor={
                                    isStateNodeDragging
                                      ? "grabbing"
                                      : isShiftPressed &&
                                        createInput &&
                                        "crosshair"
                                  }
                                  example={example}
                                />
                              </StartStateContext.Provider>
                            </MainSvgOffSetContext.Provider>
                          </indexOfStateMouseIsOverContext.Provider>
                        </MouseOverNodeContext.Provider>
                      </CreateInputContext.Provider>
                    </IsShiftKeyPressedContext.Provider>
                  </IsDraggingContext.Provider>
                </StateNodeContext.Provider>
              </StateNodesContext.Provider>
            </VertexPositionsProvider>
          </AnimateVerticesProvider>
        </AdjacencyListProvider>
      </main>
    </div>
  );
};

export default Layout;

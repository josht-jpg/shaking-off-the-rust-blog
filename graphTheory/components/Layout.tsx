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
import IsLightModeContext from "../contexts/IsLightModeContext";
import MouseOverNodeContext from "../contexts/MouseOverNodeContenxt";
import indexOfStateMouseIsOverContext from "../contexts/indexOfStateMouseIsOver";
import { useRef } from "react";
import * as d3 from "d3";
import MainSvgOffSetContext from "../contexts/MainSvgOffSet";
import StartStateContext from "../contexts/StartStateContext";
import startInputId from "../utils/startInputId";
import HowTo from "./howTo/AnalysisPanel";
import useCreateStatesFromLocalStorage from "../hooks/useCreateStatesFromLocalStorage";
import createInputsFromLocalStorage from "../utils/createInputsFromLocalStorage";
import DarkModeToggle from "./darkModeToggle/DarkModeToggle";
import EditArea from "./edtiArea/EditArea";
import {
  DARK_MODE_BACKGROUND,
  LIGHT_MODE_BACKGROUND,
  TRANSITION_TIME,
} from "../constants/styleConstants";
import { getInputIdsFromStorage } from "../utils/inputUtils";
import { START_POINT_STORAGE_KEY } from "../constants/startPointConstants";
import { AdjacencyListProvider } from "../contexts/AdjacencyListProvider";
import { AnimateVerticesProvider } from "../contexts/AnimateVerticesContext";
import DropDown from "./dropDown/DropDown";
import { LastDeletedVertexContext } from "../contexts/LastDeletedVertex";
import { VertexPositionsProvider } from "../contexts/VertexPositionsProvider";

type createInput = {
  x: number;
  y: number;
  startNodeIndex: number;
};

interface LayoutProps {
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ title = "FSM Builder" }) => {
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

  useEffect(() => {
    setStateNodes(useCreateStatesFromLocalStorage());
  }, [setStateNodes]);

  useEffect(() => {
    const startPoint = JSON.parse(
      localStorage.getItem(START_POINT_STORAGE_KEY)
    );
    if (!!startPoint) {
      setStartIndex(startPoint.startNodeIndex);
    }
  }, [setStartIndex]);

  const { lastDeletedVertex } = useContext(LastDeletedVertexContext);
  useEffect(() => {
    d3.select(`container${lastDeletedVertex}`).remove();

    createdInputIds.map((id) => {
      const vertices = id.match(/^\d+|\d+\b|\d+(?=\w)/g);
      const v1 = parseInt(vertices[0]);
      const v2 = parseInt(vertices[1]);
      if (v1 === lastDeletedVertex || v2 === lastDeletedVertex) {
        d3.select(id.replace("Number", "Arrow")).remove();
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
          d3.select(oldId.replace("Number", "Arrow")).attr(
            "id",
            id.replace("#", "").replace("Number", "Arrow")
          );
          d3.select(id.replace("Number", "Marker")).attr(
            "id",
            id.replace("#", "").replace("Number", "Marker")
          );

          return id;
        })
    );
  }, [lastDeletedVertex]);

  useEffect(() => {
    createInputsFromLocalStorage();
    setCreatedInputIds(getInputIdsFromStorage().map((id) => "#" + id));
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

  const [isLightMode, setIsLightMode] = useState(true);

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
                        <IsLightModeContext.Provider value={isLightMode}>
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
                                  <DarkModeToggle
                                    isLightMode={isLightMode}
                                    setIsLightMode={setIsLightMode}
                                  />
                                  <DropDown />
                                  <EditorPanel />
                                  <HowTo />
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
                                  />
                                </StartStateContext.Provider>
                              </MainSvgOffSetContext.Provider>
                            </indexOfStateMouseIsOverContext.Provider>
                          </MouseOverNodeContext.Provider>
                        </IsLightModeContext.Provider>
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

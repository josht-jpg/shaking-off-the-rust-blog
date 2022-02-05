import { useEffect, useState } from "react";
import * as d3 from "d3";
import InputAttributes from "../input/InputAttributes";
import loadSelfLoops from "../../../utils/localStorage/loadSelfLoops";
import createSelfLoop from "../../../utils/createSelfLoop";
import drawCircleOutline from "../../../utils/drawCircleOutline";
import saveStateSelfLoops from "../../../utils/localStorage/saveStateSelfLoops";
import preventHightlight from "../../../utils/preventHighlight";
import dragSelfLoop, {
  dragTransform,
  dragTransformOrigin,
} from "../../../utils/selfLoops/dragUtils";
import TransformCoordinates from "../../../interfaces/transformCoordinates";

interface IGroup {
  isCreated: boolean;
  transform: TransformCoordinates;
}

interface IStateNode {
  index: number;
  isMouseOver: boolean;
  initialX: number;
  initialY: number;
  boundingRect: any;
}

interface SelfLoopsProps {
  stateNode: IStateNode;
  group: IGroup;
  isCreatingSelfLoopState: [
    boolean,
    (newState: boolean | ((previousState: boolean) => void)) => void
  ];
  currentSelfLoopIndexState: [
    number,
    (newState: number | ((previousState: number) => void)) => void
  ];
  example?: string;
}

const SelfLoops: React.FC<SelfLoopsProps> = ({
  stateNode,
  group,
  isCreatingSelfLoopState,
  currentSelfLoopIndexState,
  example,
}) => {
  const [selfLoops, setSelfLoops] = useState([]);
  const [isCreatingSelfLoop, setIsCreatingSelfLoop] = isCreatingSelfLoopState;
  const [currentSelfLoopIndex, setCurrentSelfLoopIndex] =
    currentSelfLoopIndexState;

  const [selfLoopDraggingId, setSelfLoopDraggingId] = useState<
    string | undefined
  >();

  useEffect(() => {
    if (isCreatingSelfLoop) {
      createSelfLoop(
        stateNode.index,
        currentSelfLoopIndex,
        drawCircleOutline(
          stateNode.initialX,
          stateNode.initialY,
          group.transform
        )
      );
    } else if (
      !stateNode.isMouseOver &&
      !selfLoops.map((loop) => loop.index).includes(currentSelfLoopIndex)
    ) {
      d3.select(
        `#selfLoopOnNode${stateNode.index}-${currentSelfLoopIndex}`
      ).remove();
    }
  }, [
    isCreatingSelfLoop,
    currentSelfLoopIndex,
    stateNode.isMouseOver,
    group.transform,
  ]);

  useEffect(() => {
    const handleMouseUp = () => {
      const isCreatingSelfLoopPreviousState = isCreatingSelfLoop;
      setIsCreatingSelfLoop(false);

      if (stateNode.isMouseOver && isCreatingSelfLoopPreviousState) {
        const id = `selfLoopOnNode${stateNode.index}-${currentSelfLoopIndex}`;
        const idD3 = "#" + id;

        d3.select(idD3).on("mousedown", () => setSelfLoopDraggingId(idD3));

        setSelfLoops((prev) => [
          ...prev,
          {
            id,
            stateIndex: stateNode.index,
            index: currentSelfLoopIndex,
            d: d3.select(idD3).attr("d"),
            transformOrigin: d3.select(idD3).attr("transform-origin"),
            transform: d3.select(idD3).attr("transform"),
          },
        ]);

        setCurrentSelfLoopIndex((prev) =>
          Math.max(...selfLoops.map((loop) => loop.index), prev + 1)
        );
      }

      setSelfLoopDraggingId(undefined);
    };

    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, [
    stateNode.isMouseOver,
    isCreatingSelfLoop,
    setIsCreatingSelfLoop,
    setSelfLoops,
  ]);

  useEffect(() => {
    const handleDragSelfLoop = (loopIndex: number) =>
      setSelfLoopDraggingId(`#selfLoopOnNode${stateNode.index}-${loopIndex}`);
    loadSelfLoops(
      stateNode.index,
      group.isCreated,
      handleDragSelfLoop,
      setSelfLoops
    );
  }, [stateNode.index, setSelfLoops, group.isCreated]);

  const [isDeletingSelfLoop, setIsDeletingSelfLoop] = useState(false);

  useEffect(() => {
    if (
      stateNode.index !== undefined &&
      (selfLoops.length || isDeletingSelfLoop)
    ) {
      !example && saveStateSelfLoops(stateNode.index, selfLoops);
    }
    setIsDeletingSelfLoop(false);
  }, [selfLoops, isDeletingSelfLoop]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!!selfLoopDraggingId) {
        preventHightlight(e);

        dragSelfLoop(
          selfLoopDraggingId,
          dragTransform(e, stateNode.boundingRect),
          dragTransformOrigin(
            stateNode.initialX,
            stateNode.initialY,
            group.transform
          ),
          setSelfLoops
        );
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [selfLoopDraggingId, setSelfLoops]);

  const handleSelfLoopDelete = (id: string) => {
    setIsDeletingSelfLoop(true);
    setSelfLoops((prev) => prev.filter((loop) => loop.id !== id));
  };

  return (
    <>
      {selfLoops.map(
        (loop) =>
          !d3.select("#" + loop?.id).empty() && (
            <InputAttributes
              line={{
                id: "#" + loop.id,
                stateIndex: stateNode.index,
                name: loop.name,
                color: loop.color,
                textColor: loop.textColor,
                handleDelete: () => handleSelfLoopDelete(loop.id),
              }}
              setSelfLoops={setSelfLoops}
              isOnClickSet={false}
            />
          )
      )}
    </>
  );
};

export default SelfLoops;

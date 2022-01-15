import * as d3 from "d3";

interface IStateSetters {
  setSelfLoopDraggingId: (newId: string) => void;
  setSelfLoops: (callback: (loops: any) => void) => void;
  setCurrentSelfLoopIndex: (callback: (prev: number) => void) => void;
}

const addSelfLoopToState = (
  stateIndex: number,
  selfLoopIndex: number,
  stateSetters: IStateSetters,
  selfLoops
) => {
  const id = `selfLoopOnNode${stateIndex}-${selfLoopIndex}`;
  const idD3 = "#" + id;

  d3.select(idD3).on("mousedown", () =>
    stateSetters.setSelfLoopDraggingId(idD3)
  );

  stateSetters.setSelfLoops((prev) => [
    ...prev,
    {
      id,
      stateIndex: stateIndex,
      index: selfLoopIndex,
      d: d3.select(idD3).attr("d"),
      transformOrigin: d3.select(idD3).attr("transform-origin"),
      transform: d3.select(idD3).attr("transform"),
    },
  ]);

  stateSetters.setCurrentSelfLoopIndex((prev) =>
    Math.max(...selfLoops.map((loop) => loop.index), prev + 1)
  );
};

export default addSelfLoopToState;

const getCurrentSelfLoopIndex = (stateIndex: number) =>
  Math.max(
    ...((JSON.parse(localStorage.getItem("selfLoops")) ?? {})[stateIndex]?.map(
      (loop) => loop?.index + 1
    ) ?? []),
    0
  );

export default getCurrentSelfLoopIndex;

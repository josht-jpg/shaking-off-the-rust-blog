const saveStateSelfLoops = (stateIndex: number, selfLoops) =>
  localStorage.setItem(
    "selfLoops",
    JSON.stringify({
      ...JSON.parse(localStorage.getItem("selfLoops")),
      [stateIndex]: selfLoops,
    })
  );

export default saveStateSelfLoops;

const hideNodeInStorage = (index: number) =>
  localStorage.setItem(
    "stateNodes",
    JSON.stringify(
      (JSON.parse(localStorage.getItem("stateNodes")) ?? []).map((node, i) => {
        if (index === i) {
          return { ...node, hidden: true };
        } else {
          return node;
        }
      })
    )
  );

export default hideNodeInStorage;

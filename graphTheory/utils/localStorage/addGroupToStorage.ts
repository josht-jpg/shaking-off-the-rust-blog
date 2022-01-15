const addGroupToStorage = (stateIndex: number) =>
  localStorage.setItem(
    "groups",
    JSON.stringify([
      ...(JSON.parse(localStorage.getItem("groups")) ?? []),
      {
        index: stateIndex,
      },
    ])
  );

export default addGroupToStorage;

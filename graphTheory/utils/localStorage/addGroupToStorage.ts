const addGroupToStorage = (stateIndex: number) =>
  false &&
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

const changeNodeInLocalStorage = (
  attributeToChange: string,
  newAttribute: string | number | boolean,
  nodeIndex: number
) =>
  localStorage.setItem(
    "stateNodes",
    JSON.stringify(
      (JSON.parse(localStorage.getItem("stateNodes")) ?? []).map(
        (node, index) => {
          if (index === nodeIndex) {
            node[attributeToChange] = newAttribute;
            return node;
          } else {
            return node;
          }
        }
      )
    )
  );

export default changeNodeInLocalStorage;

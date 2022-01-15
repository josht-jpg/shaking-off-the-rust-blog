const changeInputInLocalStorage = (
  attributeToChange: string,
  newAttribute: any,
  id: string
) =>
  localStorage.setItem(
    "inputs",
    JSON.stringify(
      (JSON.parse(localStorage.getItem("inputs")) ?? []).map((input) => {
        if (input.id === id) {
          input[attributeToChange] = newAttribute;
          return input;
        } else {
          return input;
        }
      })
    )
  );

export default changeInputInLocalStorage;

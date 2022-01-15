const deleteInput = (inputId: string) =>
  localStorage.setItem(
    "inputs",
    JSON.stringify(
      JSON.parse(localStorage.getItem("inputs")).filter(
        (input) => input.id !== inputId
      )
    )
  );

export default deleteInput;

const removeStartingInput = () => {
  localStorage.removeItem("startPoint");
  localStorage.setItem(
    "inputs",
    JSON.stringify(
      JSON.parse(localStorage.getItem("inputs")).filter(
        (input) => !input.id.includes("Start")
      )
    )
  );
};

export default removeStartingInput;

interface loop {
  id: string;
  stateIndex: number;
}

interface attribute {
  name: string;
  value: string;
}

const changeSelfLoopInLocalStorage = (loop: loop, attribute: attribute) => {
  localStorage.setItem(
    "selfLoops",
    JSON.stringify({
      ...JSON.parse(localStorage.getItem("selfLoops")),
      [loop.stateIndex]: (JSON.parse(localStorage.getItem("selfLoops")) ?? {})[
        loop.stateIndex
      ]?.map((sl) => {
        if (sl.id === loop.id.replace("#", "")) {
          return {
            ...sl,
            [attribute.name]: attribute.value,
          };
        } else {
          return sl;
        }
      }),
    })
  );
};

export default changeSelfLoopInLocalStorage;

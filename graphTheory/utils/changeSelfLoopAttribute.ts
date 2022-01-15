import attributeInterface from "../interfaces/attributeInterface";

const changeSelfLoopAttribute = (
  setSelfLoops,
  idOfchangingLoop: string,
  attribute: attributeInterface
) =>
  setSelfLoops((prev) =>
    prev?.map((loop) => {
      if (loop.id === idOfchangingLoop) {
        return {
          ...loop,
          [attribute.name]: attribute.value,
        };
      } else {
        return loop;
      }
    })
  );

export default changeSelfLoopAttribute;

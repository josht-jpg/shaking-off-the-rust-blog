import * as d3 from "d3";
import getAllElementsByType from "./getAllElementsByType";
import deleteInputFromStorage from "./localStorage/deleteInput";

const isPathConnectedToState = (index: number, lineId: string) =>
  lineId.startsWith(`selfLoopOnNode${index}`) ||
  (lineId.split("Number")[0].includes(index.toString()) &&
    lineId.split("Arrow")[0].includes(index.toString()) &&
    !lineId.includes("selfLoop"));

const hidePaths = (index: number) =>
  getAllElementsByType("path").map((line: any) => {
    const id = line.getAttribute("id") ?? "";
    if (isPathConnectedToState(index, id)) {
      d3.select("#" + id).attr("visibility", "hidden");
      deleteInputFromStorage(id);
    }
  });

const hideText = (index: number) => {
  getAllElementsByType("text").map((text: any) => {
    text.getAttribute("id")?.includes(index) && text.remove();
  });

  getAllElementsByType("p").map((text: any) => {
    const id = text?.getAttribute("id");
    if (
      id?.startsWith(`textselfLoopOnNode${index}`) ||
      id === `lineStartTo${index}Text` /* This guy caused a vicious bug  ||
      id?.split("Text")[0].includes(index.toString())*/
    ) {
      text.remove();
    }
  });
};

const hideStartCircle = (index: number, handleRemoveStartState: () => void) =>
  Array.from(d3.selectAll("circle")._groups[0])?.map((circle: any) => {
    if (circle.getAttribute("id")?.includes(index)) {
      handleRemoveStartState();
      localStorage.removeItem("startPoint");
    }
  });
const hideInputsConnectedToState = (
  index: number,
  handleRemoveStartState: () => void
) => {
  hidePaths(index);
  hideText(index);
  hideStartCircle(index, handleRemoveStartState);
};

export default hideInputsConnectedToState;

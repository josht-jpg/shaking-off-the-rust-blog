import createStartInput from "./createStartInput";
import * as d3 from "d3";

const createNewStartInput = (startNodeIndex: number) => {
  const startStateBoundingRect = document
    .getElementById(`stateNode${startNodeIndex}`)
    ?.getBoundingClientRect();

  const mainBoundingRect = document
    .getElementById(`mainSVG`)
    ?.getBoundingClientRect();

  //355

  const d = `M ${startStateBoundingRect.left - mainBoundingRect.left - 150} ${
    startStateBoundingRect.y + 35 - mainBoundingRect.top
  } Q ${startStateBoundingRect.left - mainBoundingRect.left} ${
    startStateBoundingRect.y + 35 - mainBoundingRect.top
  } ${startStateBoundingRect.left - mainBoundingRect.left} ${
    startStateBoundingRect.y + 35 - mainBoundingRect.top
  }`;
  const id = `lineStartTo${startNodeIndex}Number`;

  d3.select("#mainSVG")
    .append("path")
    .attr("id", id)
    .attr("class", "input")
    .attr("d", d)
    .attr("marker-start", `url(#startMarker)`)
    .attr("marker-end", `url(#${id.replace("Number", "Marker")})`)
    .attr("stroke", "gray")
    .attr("opacity", "0.4")
    .attr("filter", "drop-shadow(2px 2px 2px rgb(0 0 0 / 0.2))")
    .attr("stroke-width", "3px")
    .attr("width", "3px")
    .attr("fill", "none")
    .attr("cursor", "pointer");

  // createStartInput(id);

  false &&
    localStorage.setItem(
      "startPoint",
      JSON.stringify({
        id,
        d,
        startNodeIndex,
        position: {
          cx: startStateBoundingRect.left - mainBoundingRect.left - 150,
          cy: startStateBoundingRect.y + 35 - mainBoundingRect.top,
        },
      })
    );

  false &&
    localStorage.setItem(
      "inputs",
      JSON.stringify([
        ...(JSON.parse(localStorage.getItem("inputs")) ?? []),
        { id, d },
      ])
    );
};

export default createNewStartInput;

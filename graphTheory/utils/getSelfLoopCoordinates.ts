import * as d3 from "d3";

const getSelfLoopCoordinates = (id: string) => {
  const d = d3.select(`#${id}`).attr("d");

  const M = d.split("a")[0];
  const a = "a" + d.split("a")[1];

  const cx = M.split(",")[0].replace("M ", "");
  const cy = M.split(",")[1].trim();

  return { cx, cy, a };
};

export default getSelfLoopCoordinates;

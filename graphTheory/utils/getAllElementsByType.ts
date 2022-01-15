import * as d3 from "d3";

const getAllElementsByType = (type: string) =>
  Array.from(d3.selectAll(type)._groups[0]) ?? [];

export default getAllElementsByType;

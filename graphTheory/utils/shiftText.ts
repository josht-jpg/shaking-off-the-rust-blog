import * as d3 from "d3";

const shiftText = (id: string) => {
  if (!d3.select(id).empty()) {
    const rotation = d3
      .select(id)
      .attr("transform")
      ?.split("(")[1]
      .split(")")[0];

    if (rotation < -173 && rotation > -291) {
      return { shiftX: 100, shiftY: 30 };
    } else if (rotation < 0) {
      return { shiftX: -35, shiftY: 0 };
    } else {
      return { shiftX: 20, shiftY: -43 };
    }
  } else {
    return { shiftX: null, shiftY: null };
  }
};

export default shiftText;

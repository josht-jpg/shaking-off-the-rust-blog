const getCoordinatesOfPath = (line: string) => {
  const M = line.split("Q")[0];

  const x1 = parseFloat(M.split(" ")[1]);
  const y1 = parseFloat(M.split(" ")[2]);

  const Q = line.split("Q")[1];
  const x2 = parseFloat(Q?.split(" ")[3]);
  const y2 = parseFloat(Q?.split(" ")[4]);

  const c1 = parseFloat(Q?.split(" ")[1]);
  const c2 = parseFloat(Q?.split(" ")[2]);

  return { x1, y1, x2, y2, c1, c2 };
};

export default getCoordinatesOfPath;

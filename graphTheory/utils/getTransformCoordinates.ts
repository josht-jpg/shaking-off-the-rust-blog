const getTransformCoordinates = (transformString: string) => {
  if (!!transformString) {
    const firstBracketRemoved = transformString.split("(")[1];
    const transformX = parseFloat(firstBracketRemoved.split(" ")[0]);
    const transformY = parseFloat(
      firstBracketRemoved.split(" ")[1].replace(")", "")
    );

    return { transformX, transformY };
  } else {
    return { transformX: 0, transformY: 0 };
  }
};

export default getTransformCoordinates;

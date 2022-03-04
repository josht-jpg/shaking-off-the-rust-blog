import React, { useContext, useEffect, useState } from "react";
import InputDetails from "./inputDetails/InputDetails";
import * as d3 from "d3";
import Latex from "react-latex-next";
import CSSColors from "../../../utils/CSSColors";
import shiftText from "../../../utils/shiftText";
import removeWhiteSpace from "../../../utils/removeWhiteSpace";
import changeSelfLoopAttribute from "../../../utils/changeSelfLoopAttribute";
import attributeInterface from "../../../interfaces/attributeInterface";
import LatexLabel from "../../LatexLabel";
import { TRANSITION_TIME } from "../../../constants/styleConstants";
import { IsLightModeContext } from "../../../../context/IsLightModeProvider";

interface line {
  id: string;
  stateIndex?: number | null;
  color: string | null;
  textColor: string | null;
  name: string | null;
  handleDelete?: () => void;
}

interface InputAttributesProps {
  line: line;
  setSelfLoops?: (i: any) => void;
  isOnClickSet: boolean;
}

const InputAttributes: React.FC<InputAttributesProps> = ({
  line,
  setSelfLoops,
  isOnClickSet,
}) => {
  const { isLightMode } = useContext(IsLightModeContext);

  const isSelfLoop = line.id.startsWith("#selfLoop");

  const [showInputDetails, setShowInputDetails] = useState(false);
  const [onClickCoordinates, setOnClickCoordinates] = useState<any>();

  const handleClick = (e: MouseEvent) => {
    setOnClickCoordinates({ x: e.clientX, y: e.clientY });
    setShowInputDetails(true);
    d3.select(line.id).attr("opacity", "1");
  };

  useEffect(() => {
    if (!isOnClickSet) {
      d3.select(line.id).on("click", handleClick);
    }
  }, [isOnClickSet, line.id, setOnClickCoordinates, setShowInputDetails]);

  const [name, setName] = useState(line.name ?? "");
  const [weight, setWeight] = useState<number>();
  const [color, setColor] = useState(line.color ?? "");
  const [textColor, setTextColor] = useState(line.textColor ?? "");

  //Change setters to handlers?
  const inputAttributes = [
    {
      value: name,
      setAttribute: setName,
      label: <LatexLabel labelType={"Edge"} />,
    },
    { value: weight, setAttribute: setWeight, label: "Weight" },
    { value: color, setAttribute: setColor, label: "Line Color" },
    {
      value: textColor,
      setAttribute: setTextColor,
      label: "Text Color",
    },
  ];

  const changeSelfLoopAttributeWrapper = (attribute: attributeInterface) =>
    isSelfLoop &&
    changeSelfLoopAttribute(setSelfLoops, line.id.replace("#", ""), attribute);

  useEffect(() => {
    if (CSSColors.includes(removeWhiteSpace(color?.toLowerCase?.()))) {
      d3.select(line.id).attr("stroke", removeWhiteSpace(color));

      if (!line.id.startsWith("#selfLoop")) {
        d3.select(line.id.replace("line", "path")).attr(
          "fill",
          removeWhiteSpace(color)
        );
        d3.select(line.id.replace("Number", "Circle")).attr(
          "fill",
          removeWhiteSpace(color)
        );
      }

      changeSelfLoopAttributeWrapper({
        name: "color",
        value: color,
      });
    }
  }, [color, setSelfLoops, line.id]);

  useEffect(() => {
    changeSelfLoopAttributeWrapper({
      name: "textColor",
      value: textColor,
    });
  }, [textColor]);

  useEffect(() => {
    changeSelfLoopAttributeWrapper({ name: "name", value: name });
  }, [name]);

  const { shiftX, shiftY } = shiftText(line.id);

  const handleDelete = () => {
    d3.select(line.id).attr("visibility", "hidden");
    setShowInputDetails(false);

    if (isSelfLoop) {
      line.handleDelete();
    }
  };

  return (
    <>
      {showInputDetails && (
        <InputDetails
          inputAttributes={inputAttributes}
          onClickCoordinates={onClickCoordinates}
          handleClose={() => {
            setShowInputDetails(false);
            !d3.select(line.id).empty() &&
              d3.select(line.id).attr("opacity", "0.4");
          }}
          handleDeleteInput={handleDelete}
        />
      )}
      <p
        id={"text" + line.id.replace("#", "")}
        className={"inputTitle"}
        onClick={(e) => handleClick(e as unknown as MouseEvent)}
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          cursor: "pointer",
          color: !!textColor ? removeWhiteSpace(textColor) : "gray",
          opacity: !showInputDetails && "0.85",
          position: "absolute",
          transition: `color ${TRANSITION_TIME}`,
          left:
            document
              .getElementById(line.id.replace("#", ""))
              ?.getBoundingClientRect().left + shiftX,
          top:
            document
              .getElementById(line.id.replace("#", ""))
              ?.getBoundingClientRect().top + shiftY,
          transform: d3.select(line.id).attr("transform"),
        }}
      >
        <strong>{!!name && <Latex>{name}</Latex>}</strong>
      </p>
    </>
  );
};

export default InputAttributes;

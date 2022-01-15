import Latex from "react-latex-next";

const LatexLabel = ({ labelType }: { labelType: string }) => (
  <Latex>{`${labelType} Name ($\\LaTeX$ is welcome)`}</Latex>
);

export default LatexLabel;

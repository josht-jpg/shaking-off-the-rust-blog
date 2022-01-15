import GraphTheoryIndex from "../../graphTheory";
import Layout from "../../graphTheory/components/Layout";

const BreadthFirstSearch = () => {
  return (
    <div
      style={{ marginLeft: "-18vw", marginTop: "4rem", marginBottom: "4rem" }}
    >
      <div
        id={"graph-container"}
        style={{
          width: "75vw",
          height: "85vh",
          boxShadow:
            "0px 1px 8px -1px rgb(0 0 0 / 20%), 0px 3px 24px -2px rgb(0 0 0 / 5%)",
          position: "relative",
        }}
      >
        <GraphTheoryIndex />
      </div>
    </div>
  );
};

export default BreadthFirstSearch;

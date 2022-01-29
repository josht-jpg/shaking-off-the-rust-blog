import dynamic from "next/dynamic";
import GraphTheoryIndex from "../../graphTheory";

const WasmComponent = dynamic({
  loader: async () => {
    const wasmModule = await import("../../main.wasm");
    return () => (
      <div>{`bfs: ${wasmModule.bfs(
        [[1, 2], [0, 3, 4], [0, 4], [1, 4, 5], [1, 2, 3, 5], [3, 4], [7], [6]],
        0,
        5
      )}`}</div>
    );
  },
});

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
          marginBottom: "4rem",
        }}
      >
        <GraphTheoryIndex example={"ALPACA"} />
      </div>

      {/* <div
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
      </div>*/}
    </div>
  );
};

export default BreadthFirstSearch;

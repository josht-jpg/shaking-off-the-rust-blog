import { useEffect } from "react";
import Layout from "./components/Layout";
import { LastDeletedVertexProvider } from "./contexts/LastDeletedVertex";
import getAllElementsByType from "./utils/getAllElementsByType";

const GraphTheoryIndex = () => {
  /* useEffect(() => {
    getAllElementsByType("marker").map((line: any) => {
      const id = line.getAttribute("id") ?? "";
      d3.select("#" + id).attr("visibility", "hidden");
    });
  }, []);*/
  return (
    <LastDeletedVertexProvider>
      <Layout></Layout>
    </LastDeletedVertexProvider>
  );
};

export default GraphTheoryIndex;

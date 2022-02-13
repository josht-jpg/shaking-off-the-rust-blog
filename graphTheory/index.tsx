import Layout from "./components/Layout";
import { LastDeletedVertexProvider } from "./contexts/LastDeletedVertex";
import { MainSvgIdProvider } from "./contexts/MainSvgIdProvider";
import NodeLabelsProvider from "./contexts/NodeLabelsProvider";

interface IProps {
  example?: string;
}

const GraphTheoryIndex: React.FC<IProps> = ({ example }) => {
  return (
    <MainSvgIdProvider isExample={!!example}>
      <NodeLabelsProvider>
        <LastDeletedVertexProvider>
          <Layout example={example}> </Layout>
        </LastDeletedVertexProvider>
      </NodeLabelsProvider>
    </MainSvgIdProvider>
  );
};

export default GraphTheoryIndex;

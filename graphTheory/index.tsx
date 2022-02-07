import Layout from "./components/Layout";
import { LastDeletedVertexProvider } from "./contexts/LastDeletedVertex";
import NodeLabelsProvider from "./contexts/NodeLabelsProvider";

interface IProps {
  example?: string;
}

const GraphTheoryIndex: React.FC<IProps> = ({ example }) => {
  return (
    <NodeLabelsProvider>
      <LastDeletedVertexProvider>
        <Layout example={example}> </Layout>
      </LastDeletedVertexProvider>
    </NodeLabelsProvider>
  );
};

export default GraphTheoryIndex;

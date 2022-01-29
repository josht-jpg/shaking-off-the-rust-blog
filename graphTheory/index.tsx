import Layout from "./components/Layout";
import { LastDeletedVertexProvider } from "./contexts/LastDeletedVertex";

interface IProps {
  example?: string;
}

const GraphTheoryIndex: React.FC<IProps> = ({ example }) => {
  return (
    <LastDeletedVertexProvider>
      <Layout example={example}> </Layout>
    </LastDeletedVertexProvider>
  );
};

export default GraphTheoryIndex;

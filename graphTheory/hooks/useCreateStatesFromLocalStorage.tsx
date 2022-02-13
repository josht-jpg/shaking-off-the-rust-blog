import CreatedStateNode from "../components/FSMpieces/stateNode/CreatedStateNode";

//TODO: no longer needs use in name
const useCreateStatesFromLocalStorage = () => {
  false &&
    (JSON.parse(localStorage.getItem("stateNodes")) ?? []).map(
      (node, index) =>
        !node.hidden && (
          <CreatedStateNode
            x={node.x}
            y={node.y}
            index={index}
            savedAttributes={node}
          />
        )
    );
};

export default useCreateStatesFromLocalStorage;

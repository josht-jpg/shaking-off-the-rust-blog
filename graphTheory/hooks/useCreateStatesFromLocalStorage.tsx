import CreatedStateNode from "../components/FSMpieces/stateNode/CreatedStateNode";

const useCreateStatesFromLocalStorage = () =>
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

export default useCreateStatesFromLocalStorage;

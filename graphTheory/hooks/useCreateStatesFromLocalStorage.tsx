import { useContext } from "react";
import CreatedStateNode from "../components/FSMpieces/stateNode/CreatedStateNode";
import MainSvgOffSetContext from "../contexts/MainSvgOffSet";

//TODO: no longer needs use in name
const useCreateStatesFromLocalStorage = () => {
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

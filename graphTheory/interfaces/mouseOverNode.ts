export type NodePosition = {
  x: number;
  y: number;
};

export type MouseOverNode = {
  MouseOverNodePostion: NodePosition;
  setMouseOverNodePosition: (position: NodePosition) => void;
};

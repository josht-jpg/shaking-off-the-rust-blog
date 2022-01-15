import { MAIN_SVG_ID } from "../constants/htmlElementIds";

const mainBoundingRect = () =>
  document.getElementById(MAIN_SVG_ID)?.getBoundingClientRect();

export default mainBoundingRect;

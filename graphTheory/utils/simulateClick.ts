const simulateClick = (elem /* Must be the element, not d3 selection */) => {
  var evt = document.createEvent("MouseEvents");
  evt.initMouseEvent(
    "click" /* type */,
    true /* canBubble */,
    true /* cancelable */,
    window /* view */,
    0 /* detail */,
    0 /* screenX */,
    0 /* screenY */,
    0 /* clientX */,
    0 /* clientY */,
    false /* ctrlKey */,
    false /* altKey */,
    false /* shiftKey */,
    false /* metaKey */,
    0 /* button */,
    null
  ); /* relatedTarget */
  elem.dispatchEvent(evt);
};

export default simulateClick;

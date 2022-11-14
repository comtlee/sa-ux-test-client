import reactDom from "react-dom";

const ModalPortal = ({ children }) => {
  const modal = document.getElementById("modal");
  return reactDom.createPortal(children, modal);
};

export default ModalPortal;

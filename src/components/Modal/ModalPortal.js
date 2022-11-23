import reactDom from "react-dom";
import PropTypes from "prop-types";

const ModalPortal = ({ children }) => {
  const modal = document.getElementById("modal");
  return reactDom.createPortal(children, modal);
};

ModalPortal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ModalPortal;

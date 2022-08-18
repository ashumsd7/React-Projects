import { Fragment } from "react";
import ReactDOM from 'react-dom'
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {

    const portalElement= document.getElementById('overlays')
    console.log(portalElement)
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop/>,portalElement)}
      {ReactDOM.createPortal(  <ModalOverlays>{props.children}</ModalOverlays>,portalElement)}
     
    </Fragment>
  );
};

export default Modal;

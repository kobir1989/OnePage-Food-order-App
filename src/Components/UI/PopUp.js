import React, { Fragment } from 'react';
import classes from './PopUp.module.css';
import ReactDOM from 'react-dom';

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseCart} />;
};
const PopupOverlay = (props) => {
  return (
    <div className={classes.popup}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById('popup');
const PopUp = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onCloseCart={props.onCloseCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <PopupOverlay>{props.children}</PopupOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default PopUp;

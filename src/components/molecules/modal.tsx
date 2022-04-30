import React from 'react';
import classNames from 'classnames';

export interface ModalProps {
  children?: React.ReactNode;
  visible?: boolean;
  onClose?: Function | any;
}

const Modal: React.FC<ModalProps> = ({ children, visible, onClose }) => {
  return (
    <div
      className={classNames('modal', {
        visible
      })}
    >
      <div className="wrapper-bg" onClick={onClose}></div>
      <div className="modal-container">{children}</div>
    </div>
  );
};

export default Modal;

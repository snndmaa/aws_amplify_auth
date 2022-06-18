import React from 'react';
import { Modal } from 'antd';

const SharedModal = ({ children, visibble, onCancel }) => {
  return (
    <Modal
    visible={visibble}
    onCancel={onCancel}
    footer={null}
    >
        {children}
    </Modal>
  )
}

export default SharedModal;

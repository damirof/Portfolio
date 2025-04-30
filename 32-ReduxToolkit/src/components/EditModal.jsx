import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const EditModal = ({ isOpen, onClose, currentTodo, onSave }) => {
  const [editedText, setEditedText] = useState(currentTodo?.text || '');

  const handleSave = () => {
    onSave(editedText);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Edit Todo Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Edit Todo</h2>
      <input
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
      <div className="modal-buttons">
        <button onClick={onClose}>Cancel</button>
        <button onClick={handleSave}>Save</button>
      </div>
    </Modal>
  );
};

export default EditModal;
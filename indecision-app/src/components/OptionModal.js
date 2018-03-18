import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <div>
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      className="modal"
      closeTimeoutMS={200}
      onRequestClose={props.handleClearSelectedOption}
    >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption &&
      <p className="modal__body">{props.selectedOption}</p>}
      <button className="button"
              onClick={props.handleClearSelectedOption}>Okay
      </button>
    </Modal>
  </div>
);

export default OptionModal;
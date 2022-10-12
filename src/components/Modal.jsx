import React from "react";

const Modal = ({ data, setModalData }) => {
    const {correctAnswer} = data
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box rounded-md relative">
          <label
            onClick={() => setModalData(null)}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Correct Answer</h3>
          <p className="py-4">{correctAnswer}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;

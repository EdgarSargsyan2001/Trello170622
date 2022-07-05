import { useDispatch } from 'react-redux';
import { addSec, addTask } from '../../features/section/sectionSlice';
import './Modal.css';
import { ModalObj, ModalProps } from 'src/types';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';

function Modal({ setInfoModal, infoModal }: ModalProps) {
  const dispatch = useDispatch();

  const titleRef = React.useRef<HTMLInputElement>(null)
  const descRef = React.useRef<HTMLInputElement>(null)
  const color1Ref = React.useRef<HTMLInputElement>(null)
  const color2Ref = React.useRef<HTMLInputElement>(null)

 

  //===== style ==========================================
  const modalStyle = {
    background: 'linear-gradient(45deg,rgb(54, 217, 228),rgb(233, 233, 75)',
  };

  //===== function ====================
  const AddSecToStore = () => {
    const SecId = uuidv4();
    const secObj = {
      id: SecId,
      title: titleRef.current?.value,
      desc:descRef.current?.value,
      color1:color1Ref.current?.value,
      color2:color2Ref.current?.value,
      tasks: [],
    };

    dispatch(addSec(secObj));
    setInfoModal((prev: ModalObj) => {
      return { ...prev, openModal: false };
    });
  };

  const AddTaskToStore = () => {
    const id = uuidv4()
    const taskObj = {
      id: id,
      title: titleRef.current?.value,
      desc:descRef.current?.value,
      color1:color1Ref.current?.value,
      color2:color2Ref.current?.value,
    };

    if (titleRef.current?.value) {
      
    }
    dispatch(addTask(taskObj));
    setInfoModal((prev: ModalObj) => {
      return { ...prev, openModal: false };
    });
  };

  return (
    <div
      style={infoModal.modalType === 'task' ? modalStyle : {}}
      className="modal"
    >
      <span className="modalSpan"></span>
      <span className="modalSpan"></span>
      <span className="modalSpan"></span>
      <span className="modalSpan"></span>

      <input
        defaultValue={''}
        type="text"
        className="modalInp"
        placeholder="title"
        ref={titleRef}
      />

      <input
        defaultValue={''}
        type="text"
        placeholder="description"
        className="modalInp"
        ref={descRef}
      />
      <input
        defaultValue={'#eeee11'}
        type="color"
        ref={color1Ref}
      />

      <input
        defaultValue={'#03c8ab'}
        type="color"
        ref={color2Ref}
      />
      <button
        className="modalBtn"
        onClick={
          infoModal.modalType === 'task' ? AddTaskToStore : AddSecToStore
        }
      >
        Add
      </button>
    </div>
  );
}

export default Modal;

import { useDispatch } from 'react-redux';
import { addSec, addTask } from '../../features/section/sectionSlice';
import {
  changeTitle,
  changeDesc,
  changeCl1,
  changeCl2,
} from '../../features/inputs/inputsSlice';
// import { useSelector } from 'react-redux';
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
  // const { title, desc, color1, color2 } = useSelector(
  //   (state: State) => state.inputs,
  // );
 

  //===== style ==========================================
  const modalStyle = {
    background: 'linear-gradient(45deg,rgb(54, 217, 228),rgb(233, 233, 75)',
  };

  //===== function ====================
  const AddSecToStore = () => {
    const SecId = uuidv4();
    const secObj = {
      id: SecId,
      title: titleRef.current,
      desc,
      color1,
      color2,
      tasks: [],
    };

    dispatch(addSec(secObj));
    dispatch(changeTitle(''));
    dispatch(changeDesc('anything'));
    setInfoModal((prev: ModalObj) => {
      return { ...prev, openModal: false };
    });
  };

  const AddTaskToStore = () => {
    const id = uuidv4()
    const taskObj = {
      id: id,
      title: titleRef.current,
      desc,
      color1,
      color2,
    };


    dispatch(addTask(taskObj));
    dispatch(changeTitle(''));
    dispatch(changeDesc('anything'));
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
        type="text"
        className="modalInp"
        placeholder="title"
        ref={titleRef}
        onChange={(e) => dispatch(changeTitle(e.target.value))}
      />

      <input
        type="text"
        placeholder="description"
        className="modalInp"
        ref={descRef}
        onChange={(e) => dispatch(changeDesc(e.target.value))}
      />
      <input
        type="color"
        value={'#eeee11'}
        ref={color1Ref}
        onChange={(e) => dispatch(changeCl1(e.target.value))}
      />

      <input
        type="color"
        value={color2}
        ref={color2Ref}
        onChange={(e) => dispatch(changeCl2(e.target.value))}
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

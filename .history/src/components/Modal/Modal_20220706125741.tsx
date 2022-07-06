import { useDispatch } from 'react-redux';
import { ModalObj, ModalProps, SecObj } from 'src/types';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import {
  addSec,
  addTask,
  editSec,
  editTask,
} from '../../features/section/sectionSlice';
import './Modal.css';

function Modal({ setInfoModal, infoModal, sectionData }: ModalProps) {
  const dispatch = useDispatch();

  const titleRef = React.useRef<HTMLInputElement>(null);
  const descRef = React.useRef<HTMLInputElement>(null);
  const color1Ref = React.useRef<HTMLInputElement>(null);
  const color2Ref = React.useRef<HTMLInputElement>(null);
  const selectRef = React.useRef<HTMLSelectElement>(null);
  const [select, setSelect] = useState(
    infoModal.nowPlaceSec || sectionData[0]?.id,
  );

  //===== style ==========================================
  const modalStyle = {
    // background: 'linear-gradient(45deg,rgb(54, 217, 228),rgb(233, 233, 75)',
  };

  //===== function modal button click====================

  const modalBtnHandel = () => {
    switch (infoModal.modalType) {
      case 'task':
        AddTaskToStoreFC();
        break;
      case 'section':
        AddSecToStoreFC();
        break;
      case 'editSec':
        EditSecFC();
        break;
      case 'editTask':
        EditTaskFC();
        break;
    }
  };

  //==== function section ====================
  const AddSecToStoreFC = () => {
    const SecId = uuidv4();
    const secObj = {
      id: SecId,
      title: titleRef.current?.value,
      desc: descRef.current?.value,
      color1: color1Ref.current?.value,
      color2: color2Ref.current?.value,
      tasks: [],
    };
    if (titleRef.current?.value && descRef.current?.value) {
      dispatch(addSec(secObj));
      setInfoModal((prev: ModalObj) => {
        return { ...prev, openModal: false };
      });
    }
  };

  const EditSecFC = () => {
    const editInfoSecObj = {
      title: titleRef.current?.value,
      desc: descRef.current?.value,
      color1: color1Ref.current?.value,
      color2: color2Ref.current?.value,
      idSec: infoModal.idSec,
    };

    if (titleRef.current?.value && descRef.current?.value) {
      dispatch(editSec(editInfoSecObj));
      setInfoModal((prev: ModalObj) => {
        return { ...prev, openModal: false };
      });
    }
  };

  //==== function Task ====================

  const AddTaskToStoreFC = () => {
    const id = uuidv4();
    const taskObj = {
      id: id,
      secId: select,
      title: titleRef.current?.value,
      desc: descRef.current?.value,
      color1: color1Ref.current?.value,
      color2: color2Ref.current?.value,
    };

    if (titleRef.current?.value && descRef.current?.value) {
      dispatch(addTask(taskObj));
      setInfoModal((prev: ModalObj) => {
        return { ...prev, openModal: false };
      });
    }
  };
  const EditTaskFC = () => {
    console.log(selectRef)

    const editInfoTaskObj = {
      title: titleRef.current?.value,
      desc: descRef.current?.value,
      color1: color1Ref.current?.value,
      color2: color2Ref.current?.value,
      idTask: infoModal.idTask,
      nowPlaceSec: infoModal.nowPlaceSec,
      idSec: select,
    };
    if (titleRef.current?.value && descRef.current?.value) {
      dispatch(editTask(editInfoTaskObj));
      setInfoModal((prev: ModalObj) => {
        return { ...prev, openModal: false };
      });
    }
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={infoModal.modalType === 'task' ? modalStyle : {}}
      className="modal"
    >
      {/* <span className="modalSpan"></span>
      <span className="modalSpan"></span>
      <span className="modalSpan"></span>
      <span className="modalSpan"></span> */}

      <input
        defaultValue={infoModal.defTitle}
        type="text"
        required
        className="modalInp"
        placeholder="title"
        ref={titleRef}
      />

      <input
        defaultValue={infoModal.defDesc}
        type="text"
        required
        placeholder="description"
        className="modalInp"
        ref={descRef}
      />
      {(infoModal.modalType === 'task' ||
        infoModal.modalType === 'editTask') && (
        <select ref={selectRef} value={select} onChange={(e) => setSelect(e.target.value)}>
          {sectionData.map((sec: SecObj) => {
            return (
              <option value={sec.id} key={sec.id}>
                {sec.title}
              </option>
            );
          })}
        </select>
      )}

      <input defaultValue={infoModal.defColor1} type="color" ref={color1Ref} />
      <input defaultValue={infoModal.defColor2} type="color" ref={color2Ref} />

      <button className="modalBtn" onClick={modalBtnHandel}>
        {infoModal.modalType === 'section' || infoModal.modalType === 'task'
          ? 'Add'
          : 'Edit'}
      </button>
    </div>
  );
}

export default Modal;

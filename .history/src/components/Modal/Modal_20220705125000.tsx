import { useDispatch } from 'react-redux';
import { addSec, addTask } from '../../features/section/sectionSlice';
import {
  changeTitle,
  changeDesc,
  changeCl1,
  changeCl2,
} from '../../features/inputs/inputsSlice';
import { useSelector } from 'react-redux';
import { changeId } from '../../features/uniqueId/uniqueIdSlice';
import './Modal.css';
import { ModalObj, ModalProps, State } from 'src/types';
import { v4 as uuidv4 } from 'uuid';



function Modal({ setInfoModal, infoModal }: ModalProps) {
  const dispatch = useDispatch();
  const { title, desc, color1, color2 } = useSelector(
    (state: State) => state.inputs,
  );
  const id =
    useSelector((state: State) => state.uniqueId);

  //===== style ==========================================
  const modalStyle = {
    background: 'linear-gradient(45deg,rgb(54, 217, 228),rgb(233, 233, 75)',
  };

  //===== function ====================
  const AddSecToStore = () => {
    const SecId = id + 100;
    const secObj = {
      id: SecId,
      title: title ? title : SecId,
      desc,
      tasks: [],
      color1,
      color2,
    };

    dispatch(changeId(id));
    dispatch(addSec(secObj));
    dispatch(changeTitle(''));
    dispatch(changeDesc('anything'));
    setInfoModal((prev: ModalObj) => {
      return { ...prev, openModal: false };
    });
  };

  const AddTaskToStore = () => {
    const taskObj = {
      title: title ? title : id,
      desc,
      id: id,
      color1,
      color2,
    };

    dispatch(changeId(id));
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
        onChange={(e) => dispatch(changeTitle(e.target.value))}
      />

      <input
        type="text"
        placeholder="description"
        className="modalInp"
        onChange={(e) => dispatch(changeDesc(e.target.value))}
      />
      <input
        type="color"
        value={color1}
        onChange={(e) => dispatch(changeCl1(e.target.value))}
      />

      <input
        type="color"
        value={color2}
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

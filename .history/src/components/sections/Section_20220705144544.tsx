import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import {
  closeSec,
  closeTask,
  dragDrop,
} from '../../features/section/sectionSlice';
import './Section.css';
import { SecObj, TaskObj } from 'src/types';
import Tasks from '../tasks/Tasks';
import { AiOutlineEdit,AiOutlineCloseSquare } from "react-icons/ai";

function Section({ sec,setInfoModal }: { sec: SecObj,setInfoModal:any }) {
  const dispatch = useDispatch();
  const [{ isOver }, RefDrop] = useDrop(() => ({
    accept: 'task',
    drop: (item: { id: number; nowPlaceSec: number }) =>
      dispatch(
        dragDrop({
          taskId: item.id,
          secId: sec.id,
          nowPlaceSec: item.nowPlaceSec,
        }),
      ),

    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  //===== style =================================
  const secStyle = {
    transform: 'scale(1.02,1.02)',
    background: `linear-gradient(45deg,${sec.color2},${sec.color1}`,
  };
  const iniSecStyle = {
    background: `linear-gradient(45deg,${sec.color1},${sec.color2}`,
  };

  //===== function =============================

  const closeSecFC = (id: number) => dispatch(closeSec(id));

  const closeTaskFC = (taskId: number) => dispatch(closeTask(taskId));

  const editSecFC = (id: number) => {
    
    setInfoModal((prev: any) => {
      return {
        ...prev,
        openModal: true,
        defTitle: sec.title,
        defDesc:sec.desc,
        defColor1: sec.color1,
        defColor2: '#03c8ab'
      }
    })

  }

  return (
    <div
      className="section"
      id={sec.id + ''}
      style={!isOver ? iniSecStyle : { ...iniSecStyle, ...secStyle }}
      ref={RefDrop}
    >
      <h3 className="secTitle">
        Title<p>{sec?.title}</p>
      </h3>
      <h3 className="secDesc">
        Description<p>{sec?.desc}</p>
      </h3>
      <button onClick={() => closeSecFC(sec.id)} className="secDeleteBtn">
        <AiOutlineCloseSquare/>
      </button>
      <button className="secEditBtn" onClick={() => editSecFC(sec.id)}>
        <AiOutlineEdit/>
      </button>

      {sec.tasks.map((task: TaskObj) => (
        <Tasks
          key={task.id}
          task={task}
          closeTaskFC={closeTaskFC}
          nowPlaceSec={sec.id}
        />
      ))}
    </div>
  );
}

export default Section;

import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import {
  closeSec,
  closeTask,
  dragDrop,
} from '../../features/section/sectionSlice';
import './Section.css';
import { sectionPrpos, TaskObj } from 'src/types';
import Tasks from '../tasks/Tasks';
import { AiOutlineEdit, AiOutlineCloseSquare } from 'react-icons/ai';
import { memo, useCallback, useRef } from 'react';

export default memo(function Section({ sec,setInfoModal }: sectionPrpos) {
  console.log('section up');
  const dispatch = useDispatch();
  
  


  //===== style =================================
  const secStyle = {
    // transform: 'scale(1.02,1.02)',
    // background: `linear-gradient(45deg,${sec.color2},${sec.color1}`,
  };
  const iniSecStyle = {
    background: `linear-gradient(45deg,${sec.color1},${sec.color2}`,
  };

  //===== function =============================

  const closeSecFC = useCallback((id: string) => dispatch(closeSec(id)), []);
  const editSecFC = useCallback((id: string) => {
    setInfoModal((prev: any) => {
      return {
        ...prev,
        openModal: true,
        modalType: 'editSec',
        defTitle: sec.title,
        defDesc: sec.desc,
        defColor1: sec.color1,
        defColor2: sec.color2,
        idSec: id,
      };
    });
  }, [sec]);

  const closeTaskFC = useCallback(
    (taskId: string, secId: string) => dispatch(closeTask({ taskId, secId })),
    [],
  );
  const editTaskFC = useCallback(
    ({ nowPlaceSec, ...task }: TaskObj & { nowPlaceSec: string }) => {
      setInfoModal((prev: any) => {
        return {
          ...prev,
          openModal: true,
          modalType: 'editTask',
          defTitle: task.title,
          defDesc: task.desc,
          defColor1: task.color1,
          defColor2: task.color2,
          idTask: task.id,
          nowPlaceSec: nowPlaceSec,
        };
      });
    },
    [],
  );

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
        <AiOutlineCloseSquare />
      </button>
      <button className="secEditBtn" onClick={() => editSecFC(sec.id)}>
        <AiOutlineEdit />
      </button>

      {sec.tasks.map((task: TaskObj) => (
        <Tasks
          key={task.id}
          task={task}
          closeTaskFC={closeTaskFC}
          editTaskFC={editTaskFC}
          nowPlaceSec={sec.id}
        />
      ))}
    </div>
  );
});

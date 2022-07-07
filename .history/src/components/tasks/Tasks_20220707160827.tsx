import { useDrag } from 'react-dnd';
import { taskProps } from 'src/types';
import './Tasks.css';
import { AiOutlineEdit, AiOutlineCloseSquare } from 'react-icons/ai';
import React, { memo } from 'react';

export default memo(function Tasks({
  task,
  closeTaskFC,
  nowPlaceSec,
  editTaskFC,
}: taskProps) {
  console.log('task up');
  let k = false

  const [{ isDragging }, RefDrag] = useDrag(() => ({
    item: { id: task.id, nowPlaceSec },
    isDragging: ( monitor): any => {
      k = true
    },
    type: k?'task':'g',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  //===== style ===============================
  const taskStyle = {
    // opacity: 0.5,
    // transform: 'scale(0.9,0.9)',
  };
  const initTaksStyle = {
    background: `linear-gradient(45deg,${task.color1},${task.color2}`,
  };

  return (
    <div
      style={isDragging ? { ...initTaksStyle, ...taskStyle } : initTaksStyle}
      ref={RefDrag}
      id={task.id}
      className="task"
    >
      <button
        onClick={() => closeTaskFC(task.id, nowPlaceSec)}
        className="deleteTask"
      >
        <AiOutlineCloseSquare />
      </button>
      <button
        onClick={() => editTaskFC({ ...task, nowPlaceSec })}
        className="editTask"
      >
        <AiOutlineEdit />
      </button>
      <p>title:{task?.title}</p>
      <p>title:{task?.desc}</p>
    </div>
  );
});

import { useDrag } from 'react-dnd';
import { taskProps } from 'src/types';
import './Tasks.css';
import { AiOutlineEdit, AiOutlineCloseSquare } from 'react-icons/ai';
import React, { memo } from 'react';

export default memo( function Tasks({
  task,
  closeTaskFC,
  nowPlaceSec,
  editTaskFC,
}: taskProps) {
  console.log('task up');

  const aaRef = React.useRef<HTMLDivElement>(null);

  const [{ isDragging }, RefDrag] = useDrag(() => ({
    type: 'task',
    item: { id: task.id, nowPlaceSec },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  console.log(aaRef.current)
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
      ref={aaRef}
      id={task.id}
      className="task"
    >
      <button onClick={() => closeTaskFC(task.id,nowPlaceSec)} className="deleteTask">
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
})

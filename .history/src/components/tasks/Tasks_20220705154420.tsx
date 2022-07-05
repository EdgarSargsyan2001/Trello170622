import { useDrag } from 'react-dnd';
import { TaskObj } from 'src/types';
import './Tasks.css';
import { AiOutlineEdit, AiOutlineCloseSquare } from 'react-icons/ai';

function Tasks({
  task,
  closeTaskFC,
  nowPlaceSec,
  editTaskFC,
}: {
  task: TaskObj;
  closeTaskFC: (task: TaskObj) => void;
  editTaskFC: (task: TaskObj) => void;
  nowPlaceSec: string;
}) {
  const [{ isDragging }, RefDrag] = useDrag(() => ({
    type: 'task',
    item: { id: task.id, nowPlaceSec },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  //===== style ===============================
  const taskStyle = {
    opacity: 0.5,
    transform: 'scale(0.9,0.9)',
  };
  const initTaksStyle = {
    background: `linear-gradient(45deg,${task.color1},${task.color2}`,
  };

  return (
    <div
      style={isDragging ? { ...initTaksStyle, ...taskStyle } : initTaksStyle}
      ref={RefDrag}
      id={task.id + ''}
      className="task"
    >
      <button onClick={() => closeTaskFC(task.id)} className="deleteTask">
        <AiOutlineCloseSquare />
      </button>
      <button onClick={() => editTaskFC(task)} className="editTask">
        <AiOutlineEdit />
      </button>
      <p>title:{task?.title}</p>
      <p>title:{task?.desc}</p>
    </div>
  );
}

export default Tasks;

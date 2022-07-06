import { createSlice } from '@reduxjs/toolkit';
import { SecObj, TaskObj } from 'src/types';

const initialState: Array<SecObj> = [];

const dragDropFC = (state:Array<SecObj>, taskId:string, secId:string, nowPlaceSec:string) => {
  
  let dragTask: object = {};
      return state
        .map((sec: SecObj) => {
          if (sec.id === nowPlaceSec) {
            let newTasks = sec.tasks.filter((task: TaskObj) => {
              if (task?.id === taskId) dragTask = task;

              return task?.id !== taskId;
            });
            return { ...sec, tasks: newTasks };
          }

          return sec;
        })
        .map((sec) => {
          if (sec?.id === secId && dragTask)
            return { ...sec, tasks: [...sec?.tasks, dragTask] };
          return sec;
        });
}

export const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {
    addSec: (state, action) => (state = [...state, action.payload]),
    closeSec: (state, action) =>
      state.filter((sec: SecObj) => sec.id !== action.payload),

    editSec: (state, action) =>
      state.map((sec: SecObj) => {
        if (sec.id === action.payload.idSec) {
          return {
            ...sec,
            title: action.payload.title,
            desc: action.payload.desc,
            color1: action.payload.color1,
            color2: action.payload.color2,
          };
        }
        return sec;
      }),

    addTask: (state, action) => {
      return state.map((sec: SecObj, i) => {
        if (sec.id === action.payload.secId)
          return { ...sec, tasks: [...sec.tasks, action.payload] };
        return sec;
      });
    },
    closeTask: (state, action) => {
      return state.map((sec: SecObj) => {
        let newTasks = sec.tasks.filter(
          (task: TaskObj) => task.id !== action.payload,
        );
        return { ...sec, tasks: newTasks };
      });
    },
    editTask: (state, action) => {
      return state.map((sec: SecObj): SecObj => {
        let newTasks = sec.tasks.map((task: TaskObj) => {
          if (task.id === action.payload.idTask) {
            return {
              ...task,
              title: action.payload.title,
              desc: action.payload.desc,
              color1: action.payload.color1,
              color2: action.payload.color2,
            };
          }

          return task;
        });
        return { ...sec, tasks: newTasks };
      });
    },

    dragDrop: (state, action) => {
      const { taskId, secId, nowPlaceSec } = action.payload;

      return dragDropFC(state,taskId,secId,nowPlaceSec)
    },
  },
});

export default sectionSlice.reducer;
export const {
  addSec,
  addTask,
  closeSec,
  closeTask,
  dragDrop,
  editSec,
  editTask,
} = sectionSlice.actions;

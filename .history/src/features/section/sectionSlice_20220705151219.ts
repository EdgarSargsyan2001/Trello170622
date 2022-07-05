import { createSlice } from '@reduxjs/toolkit';
import { SecObj, TaskObj } from 'src/types';

const initialState: Array<TaskObj> = [];

export const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {
    addSec: (state, action) => (state = [...state, action.payload]),
    closeSec: (state, action) =>
      state.filter((sec: SecObj) => sec.id !== action.payload),
    e
    addTask: (state, action) => {
      return state.map((sec: SecObj, i) => {
        if (i === 0) return { ...sec, tasks: [...sec.tasks, action.payload] };
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
  
    dragDrop: (state, action) => {
      const { taskId, secId, nowPlaceSec } = action.payload;
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
    },
  },
});

export default sectionSlice.reducer;
export const { addSec, addTask, closeSec, closeTask, dragDrop } =
  sectionSlice.actions;

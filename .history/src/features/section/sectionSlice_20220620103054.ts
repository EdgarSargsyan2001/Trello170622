import { createSlice } from "@reduxjs/toolkit";


const initialState = []


export const sectionSlice = createSlice({
    name:'section',
    initialState,
    reducers:{
        addSec:(state,action) => state = [...state,action.payload],
        closeSec:(state,action)=>state.filter((sec) => sec.id !== action.payload),

        addTask:(state,action) => {

           return state.map((sec,i)=>{
                if(i === 0) return {...sec,tasks:[...sec.tasks,action.payload]}
                return sec
            })
        },
        closeTask:(state,action)=>{

            return state.map((sec)=>{

                let newTasks = sec.tasks.filter((task)=>task.id !== action.payload)
                return {...sec,tasks:newTasks}
        
            })
        },
        dragDrop:(state,action)=>{
            const {taskId,secId,nowPlaceSec} = action.payload
            let dragTask
            return state.map((sec)=>{
                if(sec.id === nowPlaceSec) {

                    let newTasks = sec.tasks.filter((task)=>{
                        if(task?.id === taskId) dragTask = task
                        
                        return task?.id !== taskId
                    })
                    return {...sec,tasks:newTasks}
                }

                return sec
            }).map((sec)=>{
                if(sec?.id === secId && dragTask) return {...sec,tasks:[...sec?.tasks,dragTask]}
                return sec
            })

        }

    }



})


export default sectionSlice.reducer
export const {addSec,addTask,closeSec,closeTask,dragDrop} = sectionSlice.actions
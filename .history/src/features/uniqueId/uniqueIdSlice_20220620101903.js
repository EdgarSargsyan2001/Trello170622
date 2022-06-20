import { createSlice } from "@reduxjs/toolkit"


const initialState = 1

export const uniqueIdSlice = createSlice({
    name:'uniqueId',
    initialState,
    reducers:{
        changeId:(state,action)=> state = ++action.payload
    }
})

export default uniqueIdSlice.reducer
export {} = uniqueIdSlice.actions
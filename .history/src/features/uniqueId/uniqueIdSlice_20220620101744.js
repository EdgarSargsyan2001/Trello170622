import { createSlice } from "@reduxjs/toolkit"


const initialState = 1

export const uniqueIdSlice = createSlice({
    name:'uniqueId',
    initialState,
    reducers:{
        change
    }
})
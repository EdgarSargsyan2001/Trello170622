import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    title:'',
    desc:'enything',
    color1:'red'
    color2:'green'
}

export const inputsSlece = createSlice({
    name:'inputs',
    initialState,
    reducers:{
        changeTitle:(state,action) => {
          return  {...state,title:action.payload}
        
        },
        changeDesc:(state,action) =>{
            return  {...state,desc:action.payload}
        },
        changeColor1:(state,action)=>{},
        changeColor2:(state,action)=>{},
    }

})

export default inputsSlece.reducer
export const {changeTitle,changeDesc} = inputsSlece.actions
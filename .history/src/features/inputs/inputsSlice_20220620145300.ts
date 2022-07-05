import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    title:'',
    desc:'enything',
    color1:'#eeee11',
    color2:'#03c8ab'
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
        changeCl1:(state,action)=>{
            return  {...state,color1:action.payload}
        },
        changeCl2:(state,action)=>{
            return  {...state,color2:action.payload}
        },
    }

})

export default inputsSlece.reducer
export const {changeTitle,changeDesc,changeCl1} = inputsSlece.actions
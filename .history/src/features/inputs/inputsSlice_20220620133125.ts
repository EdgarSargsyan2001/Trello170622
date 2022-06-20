import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    title:'',
    desc:'enything'
}

export const inputsSlece = createSlice({
    name:'inputs',
    initialState,
    reducers:{
        changeTitle:(state,action:{}) => {
          return  {...state,title:action.payload}
        
        },
        changeDesc:(state,action) =>{
            return  {...state,desc:action.payload}
        }
    }

})

export default inputsSlece.reducer
export const {changeTitle,changeDesc} = inputsSlece.actions
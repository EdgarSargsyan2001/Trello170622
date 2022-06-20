
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addSec ,addTask } from '../../features/section/sectionSlice'
import {changeTitle,changeDesc} from '../../features/inputs/inputsSlice'
import {useSelector} from 'react-redux'
import './Modal.css'
import { changeId } from '../../features/uniqueId/uniqueIdSlice'

function Modal({setOpenModal,modalType}){

    const dispatch = useDispatch()
    const {title,desc} = useSelector((state) => state.inputs)
    const id = useSelector(state => state.uniqueId)

//===== useEffects ===========================

    useEffect(()=>{
      localStorage.setItem('id',JSON.stringify(id))
  
    },[id])


//===== function ====================
    const AddSecToStore = ()=>{

        const SecId = id + 100
        const secObj = {
            title:title? title : SecId,
            desc,
            tasks:[],
            id:SecId
        }
        
        dispatch(changeId(id))
        dispatch(addSec(secObj))
        dispatch(changeTitle(''))
        dispatch(changeDesc('anything'))
        setOpenModal(false)



    }


    const AddTaskToStore = ()=>{

        const taskObj = {
            title:title ? title : id,
            desc,
            id:id
        }

        dispatch(changeId(id))
        dispatch(addTask(taskObj))
        dispatch(changeTitle(''))
        dispatch(changeDesc('anything'))
        setTimeout(()=>setOpenModal(false),0)

    }

 
    return(
        <>
            <span className='modalSpan'></span>
            <span className='modalSpan'></span>
            <span className='modalSpan'></span>
            <span className='modalSpan'></span>

                <input 
                    type='text' 
                    className='modalInp'
                    placeholder='title' 
                    onChange={(e)=>dispatch(changeTitle(e.target.value))} 
                />

                <input
                    type='text' 
                    placeholder='description' 
                    className='modalInp'
                    onChange={(e)=>dispatch(changeDesc(e.target.value))} 
                />
                    
                <button 
                    className='modalBtn' 
                    onClick = {modalType ==='task'?AddTaskToStore:AddSecToStore}
                >Add</button>
        </>
    )

}



export default Modal
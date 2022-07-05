
import { useDispatch } from 'react-redux'
import { addSec ,addTask } from '../../features/section/sectionSlice'
import {changeTitle,changeDesc} from '../../features/inputs/inputsSlice'
import {useSelector} from 'react-redux'
import { changeId } from '../../features/uniqueId/uniqueIdSlice'
import { State } from 'src/App'
import './Modal.css'

function Modal({setOpenModal,modalType}:{setOpenModal:(bul:boolean)=>void,modalType:string}){

    const dispatch = useDispatch()
    const {title,desc} = useSelector((state:State) => state.inputs)
    const id = useSelector((state:State) => state.uniqueId)

//===== style ==========================================
const modalStyle = {
    background:'linear-gradient(45deg,rgb(54, 217, 228),rgb(233, 233, 75)',
  }

//===== function ====================
    const AddSecToStore = ()=>{

        const SecId = id + 100
        const secObj = {
            id:SecId,
            title:title? title : SecId,
            desc,
            tasks:[]
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
        setOpenModal(false)

    }

 
    return(
        <div style={modalType==='task'?modalStyle:{}} className="modal">
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
                <input type='color' value="" />
                <input type='color' value="#03c8ab" />
                <button 
                    className='modalBtn' 
                    onClick = {modalType ==='task'?AddTaskToStore:AddSecToStore}
                >Add</button>
        </div>
    )

}



export default Modal
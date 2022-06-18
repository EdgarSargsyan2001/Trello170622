
import { useEffect, useState } from 'react'
import './Modal.css'

function Modal({setOpenModal,setSectionData,modalType}){


    const idData = localStorage.getItem('id')
    const [id,setId] = useState(idData?JSON.parse(idData) : 1 )
    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('enything')

//===== useEffects ===========================

    useEffect(()=>{
      localStorage.setItem('id',JSON.stringify(id))
  
    },[id])


//===== function ====================
    const AddSecLocalSt = ()=>{

        const SecId = id + 100
        const secObj = {
            title:title? title : SecId,
            desc,
            tasks:[],
            id:SecId
        }
        setId(prev => prev + 1)
        setSectionData(prev => [...prev,secObj])
        setTimeout(()=>setOpenModal(false),0)
    }


    const AddTaskLocalSt = ()=>{

        const taskObj = {
            title:title ? title : id,
            desc,
            id:id
        }

        setId(prev => prev + 1)
        setSectionData(prev =>  prev.map((sec,i)=>{
                if(i === 0) return {...sec,tasks:[...sec.tasks,taskObj]}
                return sec
            })

        )
        setTimeout(()=>setOpenModal(false),0)

    }

 

    return(
        <div className="modal">
            <span className='modalSpan'></span>
            <span className='modalSpan'></span>
            <span className='modalSpan'></span>
            <span className='modalSpan'></span>

                <input 
                    type='text' 
                    className='modalInp'
                    placeholder='title' 
                    onChange={(e)=>setTitle(e.target.value)} 
                />

                <input
                    type='text' 
                    placeholder='description' 
                    className='modalInp'
                    onChange={(e)=>setDesc(e.target.value)}
                />
                    
                <button 
                    className='modalBtn' 
                    onClick = {modalType ==='task'?AddTaskLocalSt:AddSecLocalSt}
                >Add</button>
        </div>
    )

}



export default Modal
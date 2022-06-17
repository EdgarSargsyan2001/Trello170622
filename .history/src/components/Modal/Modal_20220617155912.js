
import { useEffect, useState } from 'react'
import './Modal.css'

function Modal({setRender,name,setOpenModal,sec}){


    const [title,setTitle] = useState('title')
    const [desc,setDesc] = useState('desc')
    const [AllObj,setAllObj] = useState(JSON.parse(localStorage.getItem("AllObj")))
   
    const AddSecLocalSt = ()=>{

        let obj = {
            title,
            desc,
            tasks:[],
            id:Math.random()
            
        }
        setAllObj({...AllObj,section:[...AllObj.section,obj]})
        setRender(Math.random())
        
    }


    const AddTaskLocalSt = ()=>{
        let obj = {
            title,
            desc,
            id:Math.random()
            
        }
        // setRender(Math.random())
        AllObj.section.map((el)=>{
            if(el.id === sec.id) return {}el.tasks
            return el
        })
        
        console.log(sec)
        setOpenModal(false)

    }

    useEffect(()=>{
        localStorage.setItem('AllObj',JSON.stringify(AllObj))

    },[AllObj])

    return(
        <div className="modal">

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
                    
                <button className='modalBtn' onClick={name?AddTaskLocalSt:AddSecLocalSt}>Add</button>
        </div>
    )

}



export default Modal
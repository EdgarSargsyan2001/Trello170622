
import { useEffect, useState } from 'react'
import './Modal.css'

function Modal({setRender,name}){


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
                    
                <button className='modalBtn' onClick={name?Add:AddSecLocalSt}>Add</button>
        </div>
    )

}



export default Modal
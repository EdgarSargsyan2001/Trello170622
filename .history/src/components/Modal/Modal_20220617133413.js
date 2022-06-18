
import { useEffect, useState } from 'react'
import './Modal.css'

function Modal({setRender,seOpenModalSec}){


    const [title,setTitle] = useState('title')
    const [desc,setDesc] = useState('desc')
    const [AllObj,setAllObj] = useState(JSON.parse(localStorage.getItem("AllObj")))


   
    const AddSecLocalSt = ()=>{

        let obj = {
            title,
            desc,
            tasks:[]
        }
        setAllObj({...AllObj,section:[...AllObj.section,obj]})
        setRender(Math.random())
        seOpenModalSec(false)
        
    }
    useEffect(()=>[
        localStorage.setItem('AllObj',JSON.stringify(AllObj))

    ],[AllObj])

    return(
        <div className="modal">

                <input 
                    type='text' 
                    placeholder='title' 
                    onChange={(e)=>setTitle(e.target.value)} 
                />

                <input
                    type='text' 
                    placeholder='description' 
                    onChange={(e)=>setDesc(e.target.value)}
                />
                    
                <button onClick={AddSecLocalSt}>Add</button>
        </div>
    )

}



export default Modal
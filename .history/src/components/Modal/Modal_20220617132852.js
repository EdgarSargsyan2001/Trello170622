
import { useState } from 'react'
import './Modal.css'

function Modal({setRender,seOpenModalSec}){


    const [title,setTitle] = useState('title')
    const [desc,setDesc] = useState('desc')
    const [AllObj,setAllObj] = useState(JSON.parse(localStorage.getItem("AllObj")))


   
    const AddSecLocalSt = (e)=>{
        e.preventdefault()

        let obj = {
            title,
            desc,
            tasks:[]
        }
        setAllObj({...AllObj,section:[...AllObj.section,obj]})
        localStorage.setItem('AllObj',JSON.stringify(AllObj))
        setRender(Math.random())
        // seOpenModalSec(false)

    }

    return(
        <div className="modal">
            <form onSubmit={()=>}>
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
            </form>
        </div>
    )

}



export default Modal
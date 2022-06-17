
import { useState } from 'react'
import './Modal.css'

function Modal(){


   const [title,setTitle] = useState('')
   const [desc,setDesc] = useState('')
   const [AllObj,setAllObj] = useState(JSON.parse(localStorage.getItem("AllObj")))


   
   const AddSecLocalSt = ()=>{
    console.log(AllObj)

    }

    return(
        <div className="modal">
            <form onSubmit={(e)=>{
                e.preventDefault()
                AddSecLocalSt()
            }}>
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
                    
                <button>Add</button>
            </form>
        </div>
    )

}



export default Modal
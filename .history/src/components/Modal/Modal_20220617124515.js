
import { useState } from 'react'
import './Modal.css'

function Modal(){


   const [title,setTitle] = useState('')
   const [desc,seDesc] = useState('')




    return(
        <div className="modal">
            <form>
                <input 
                    placeholder='title' 
                    type='text' onChange={(e)=>setTitle(e.target.value)} 
                />


                <input
                    type='text' 
                    placeholder='description' />
                <button>Add</button>
            </form>
        </div>
    )

}



export default Modal

import { useState } from 'react'
import './Modal.css'

function Modal(){


   const [title,setTitle] = useState('')



    return(
        <div className="modal">
            <form>
                <input 
                    type='text' onChange={()=>{

                        }} 
                    placeholder='title' />


                <input type='text' placeholder='description' />
                <button>Add</button>
            </form>
        </div>
    )

}



export default Modal

import { useState } from 'react'
import './Modal.css'

function Modal(){


   const [title;,set] = useState('')



    return(
        <div className="modal">
            <form>
                <input type='text' placeholder='title' />
                <input type='text' placeholder='description' />
                <button>Add</button>
            </form>
        </div>
    )

}



export default Modal
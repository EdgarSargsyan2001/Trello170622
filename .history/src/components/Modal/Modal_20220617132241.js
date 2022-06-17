
import { useState } from 'react'
import './Modal.css'

function Modal({setRender}){


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
        localStorage.setItem('AllObj',JSON.stringify(AllObj))

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
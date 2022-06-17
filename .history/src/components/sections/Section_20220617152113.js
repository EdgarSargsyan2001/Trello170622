
import { useState } from 'react'
import Modal from '../Modal/Modal'
import './Section.css'

function Section({sec,setRender,index}){

    const [openModal,setOpenModal] = useState(false)

    const closeSec = (id) =>{

        let AllObj = JSON.parse(localStorage.getItem("AllObj"))
        let newSec = AllObj.section.filter((el)=>el.id !== id)
        localStorage.setItem('AllObj',JSON.stringify({...AllObj,section:newSec}))
        setRender(Math.random())

    }

    const openModalTask = ()=>{
        
        console.log('dfg')
        return <Modal />
    }
    return(
        <div className='section'>

            <h3 className='secTitle'>title:{sec?.title}</h3>
            <h3 className='secDesc'>description:{sec?.desc}</h3>
            <button onClick={()=>closeSec(sec.id)} className='secDeleteBtn'>X</button>
            {index === 0 && <button onClick={openModalTask}>Add Task</button>}
            
            
            
            {
                sec.tasks?.map((el,i)=>{

                    return(
                        <div className='task' key={i}>
                            title:<p>{el.title}</p>
                            title:<p>{el.desc}</p>
                        </div>
                    )
                })
            }

        </div>
    )

}


export default Section

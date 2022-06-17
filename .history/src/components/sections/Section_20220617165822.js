
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
    const closeTask = (Taskid,secId) =>{
        let AllObj = JSON.parse(localStorage.getItem("AllObj"))

        let newSec = AllObj.section.map((sec)=>{
            if(sec.id === secId){
                let newTasks = sec.tasks.filter((task)=>task.id !== Taskid)
                return {...sec,tasks:newTasks}
            }
            return sec
        })

        localStorage.setItem('AllObj',JSON.stringify({...AllObj,section:newSec}))
        setRender(Math.random())

    }

    const openModalTask = () => setOpenModal(true)

      
                
            
    return(
        <div className='section'>

            <h3 className='secTitle'>title:{sec?.title}</h3>
            <h3 className='secDesc'>description:{sec?.desc}</h3>
            <button onClick={()=>closeSec(sec.id)} className='secDeleteBtn'>X</button>
            {index === 0 && <button className='addTaskBtn' onClick={openModalTask}>Add Task</button>}
            
            {openModal &&
                        <Modal 
                            name="task" 
                            setOpenModal={setOpenModal} 
                            setRender={setRender}
                            sec={sec}
                        />
            }
            
            
            {
                sec.tasks?.map((el,i)=>{

                    return(
                        <div draggable className='task' key={i}>
                            <button onClick={()=>closeTask(el.id,sec.id)} className='deleteTask'>X</button>
                            <p>title:{el.title}</p>
                            <p>title:{el.desc}</p>
                        </div>
                    )
                })
            }

        </div>
    )

}


export default Section

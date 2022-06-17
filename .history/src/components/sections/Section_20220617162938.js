
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
        // console.log(Taskid,secId)
        let AllObj = JSON.parse(localStorage.getItem("AllObj"))

        // let k = AllObj.section.filter((sec)=>sec.id === secId)[0].tasks.filter((el)=>el.id !== Taskid)
        // let j = AllObj.section.map((el)=>{
        //     if(el.id === secId) return {...el,tasks:k}
        //     return el
        // })

    AllObj.
        console.log()
    //    console.log(AllObj)
    }

    const openModalTask = ()=>{
        setOpenModal(true)
    }
    if(openModal)return <Modal 
                            name="task" 
                            setOpenModal={setOpenModal} 
                            setRender={setRender}
                            sec={sec}
                        />
      
                
            
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

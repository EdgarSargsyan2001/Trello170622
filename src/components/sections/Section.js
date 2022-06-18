
import './Section.css'
import Tasks from './tasks/Tasks'
import {useDrop} from 'react-dnd'

function Section({sec,setSectionData}){

    const [{isOver},RefDrop] = useDrop(()=>({

        accept:'task',
        drop:(item)=> DragDrop(item.id,sec.id,item.nowPlaceSec),
        collect: (monitor)=>({
            isOver:!! monitor.isOver(),
        }),
    }))

//===== style =================================    
    const secStyle = {
        transform:"scale(1.02,1.02)" ,
        background:'linear-gradient(45deg,rgb(54, 217, 228),rgb(233, 233, 75)',

    }

//===== function =============================

    const closeSec = (id) =>{
        setSectionData(prev=>{
            return prev.filter((sec)=>sec.id !== id)
        })

    }

    const closeTask = (taskId) =>{
        setSectionData(prev => prev.map((sec)=>{

               let newTasks = sec.tasks.filter((task)=>task.id !== taskId)
               return {...sec,tasks:newTasks}
    
            })
        )
    }

    const DragDrop = (taskId,secId,nowPlaceSec)=>{
        setSectionData(prev => {

            let dragTask = undefined
            return prev.map((sec)=>{
                if(sec.id === nowPlaceSec) {

                    let newTasks = sec.tasks.filter((task)=>{
                        if(task?.id == taskId) dragTask = task
                        
                        return task?.id !== taskId
                    })
                    return {...sec,tasks:newTasks}
                }

                return sec
            }).map((sec)=>{
                if(sec?.id === secId && dragTask) return {...sec,tasks:[...sec?.tasks,dragTask]}
                return sec
            })
        })


    }


    return(
        <div className='section' style={isOver?secStyle:{}} ref={RefDrop}>

            <h3 className='secTitle'>Title<p>{sec?.title}</p></h3>
            <h3 className='secDesc'>Description<p>{sec?.desc}</p></h3>
            <button onClick={()=>closeSec(sec.id)} className='secDeleteBtn'>X</button>
            
            {
                sec.tasks.map((task,i)=><Tasks 
                                            key={task.id} 
                                            task={task} 
                                            closeTask={closeTask}
                                            nowPlaceSec={sec.id}
                                            />)
            }

        </div>
    )

}


export default Section

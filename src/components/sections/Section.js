
import './Section.css'

function Section({sec,setSectionData}){


//===== function =============================

    const closeSec = (id) =>{
        setSectionData(prev=>{
            return prev.filter((sec)=>sec.id !== id)
        })

    }

    const closeTask = (taskId,secId) =>{

        setSectionData(prev => prev.map((sec)=>{

               let newTasks = sec.tasks.filter((task)=>task.id !== taskId)
               return {...sec,tasks:newTasks}
    
            })
        )
    }


      
    return(
        <div className='section'>

            <h3 className='secTitle'>Title<p>{sec?.title}</p></h3>
            <h3 className='secDesc'>Description<p>{sec?.desc}</p></h3>
            <button onClick={()=>closeSec(sec.id)} className='secDeleteBtn'>X</button>
            
            {
                sec.tasks?.map((el,i)=>{

                    return(
                        <div draggable={true} id={el.id} className='task' key={i}>
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

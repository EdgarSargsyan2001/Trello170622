
import { useDrag } from 'react-dnd'
import './Tasks.css'


function Tasks({task,closeTask,nowPlaceSec}){

    const [{isDragging},RefDrag] = useDrag(()=>({
        
        type:"task",
        item:{id:task.id,nowPlaceSec,task},
        collect: (monitor)=>({
            isDragging:!! monitor.isDragging(),
        }),

    }))


    return(
        <div 
            style={isDragging? {'opacity': 0.5,transform:"scale(0.9,0.9)" }:{}}
            ref={RefDrag} id={task.id} className='task'
            >

            <button onClick={()=>closeTask(task?.id)} className='deleteTask'>X</button>
            <p>title:{task?.title}</p>
            <p>title:{task?.desc}</p>

        </div>
    )

}

export default Tasks
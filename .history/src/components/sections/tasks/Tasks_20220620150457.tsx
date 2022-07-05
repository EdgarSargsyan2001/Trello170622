
import { useDrag } from 'react-dnd'
import { TaskObj } from 'src/App'
import './Tasks.css'


function Tasks({task,closeTaskFC,nowPlaceSec}:{task:TaskObj,closeTaskFC:(id:number)=>void,nowPlaceSec:number}){

    const [{isDragging},RefDrag] = useDrag(() => ({
        
        type:"task",
        item:{id:task.id,nowPlaceSec},
        collect: (monitor)=>({
            isDragging:!! monitor.isDragging(),
        }),

    }))
    
//===== style ===============================
    const taskStyle = {
        'opacity': 0.5,
        'transform':"scale(0.9,0.9)" 
    }
    const initTaksStyl


    return(
        <div 
            style={isDragging? taskStyle:{}}
            ref={RefDrag} id={task.id+''} className='task'
            >

            <button onClick={()=>closeTaskFC(task.id)} className='deleteTask'>X</button>
            <p>title:{task?.title}</p>
            <p>title:{task?.desc}</p>

        </div>
    )

}

export default Tasks
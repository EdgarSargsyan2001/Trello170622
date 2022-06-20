
import {useDrop} from 'react-dnd'
import { useDispatch } from 'react-redux'
import { closeSec  ,dragDrop} from '../../features/section/sectionSlice'
// import Tasks from './tasks/Tasks'
import './Section.css'   

interface Item {
    id:number
    nowPlaceSec:number
}
interface SecObj{
    title:string,
    desc:string,
    tasks:Array<object>,
    id:number
}

function Section({sec}:{sec:SecObj}) {

    const dispatch =  useDispatch()
    const [{isOver},RefDrop] = useDrop(()=>({

        accept:'task',
        drop:(item:Item) =>  dispatch(dragDrop({
                                    taskId:item.id,
                                    secId:sec.id,
                                    nowPlaceSec:item.nowPlaceSec
                                
                                })),

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

    const closeSecFC = (id:number) => dispatch(closeSec(id))
        
    // const closeTaskFC = (taskId:number) =>dispatch(closeTask(taskId))





    return(
        <div className='section' id={sec.id+''} style={isOver?secStyle:{}} ref={RefDrop}>

            <h3 className='secTitle'>Title<p>{sec?.title}</p></h3>
            <h3 className='secDesc'>Description<p>{sec?.desc}</p></h3>
            <button onClick={()=>closeSecFC(sec.id)} className='secDeleteBtn'>X</button>
            
            {/* {
                sec.tasks.map((task)=><Tasks 
                                            key={task.id} 
                                            task={task} 
                                            closeTaskFC={closeTaskFC}
                                            nowPlaceSec={sec.id}
                                            />)
            } */}

        </div>
    )

}


export default Section

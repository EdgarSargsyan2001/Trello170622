
import {useDrop} from 'react-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { closeSec ,closeTask ,dragDrop} from '../../features/section/sectionSlice'
import Tasks from './tasks/Tasks'
import './Section.css'   
import { SecObj, TaskObj } from 'src/App'




function Section({sec}:{sec:SecObj}) {

    const dispatch =  useDispatch()
    const  useSelector()
    const [{isOver},RefDrop] = useDrop(()=>({

        accept:'task',
        drop:(item:{id:number,nowPlaceSec:number}) =>  dispatch(dragDrop({
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
        
    const closeTaskFC = (taskId:number) =>dispatch(closeTask(taskId))





    return(
        <div className='section' id={sec.id+''} style={{isOver?secStyle:''}} ref={RefDrop}>

            <h3 className='secTitle'>Title<p>{sec?.title}</p></h3>
            <h3 className='secDesc'>Description<p>{sec?.desc}</p></h3>
            <button onClick={()=>closeSecFC(sec.id)} className='secDeleteBtn'>X</button>
            
            {
                sec.tasks.map((task:TaskObj)=><Tasks 
                                            key={task.id} 
                                            task={task} 
                                            closeTaskFC={closeTaskFC}
                                            nowPlaceSec={sec.id}
                                            />)
            }

        </div>
    )

}


export default Section

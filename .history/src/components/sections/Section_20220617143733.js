
import { useEffect, useState } from 'react'
import './Section.css'

function Section({sec,setRender}){

    const [AllObj,setAllObj] = useState('')

    // useEffect(()=>{
    //     setAllObj(JSON.parse(localStorage.getItem("AllObj")))
    // },[])

    const closeSec = (id) =>{
        console.log(AllObj)
        let newSec = AllObj.section.filter((el)=>el.id !== id)

        console.log(newSec)
        // setAllObj({...AllObj,section:newSec})
        setRender(Math.random())

    }

    useEffect(()=>{

        localStorage.setItem('AllObj',JSON.stringify(AllObj))

    },[AllObj])

    return(
        <div className='section'>

            <h3 className='secTitle'>title:{sec?.title}</h3>
            <h3 className='secDesc'>description:{sec?.desc}</h3>
            <button onClick={()=>closeSec(sec.id)} className='secDeleteBtn'>X</button>
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

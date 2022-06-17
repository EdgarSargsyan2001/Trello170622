
import './Section.css'

function Section({sec}){


    

    return(
        <div className='section'>

            <h3 className='secTitle'>title:{sec?.title}</h3>
            <h3 className='secDesc'>description:{sec?.desc}</h3>
            <button className='secDeleteBtn'>X</button>
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

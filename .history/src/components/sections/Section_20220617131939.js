
import './Section.css'

function Section({sec}){


    return(
        <div className='section'>

            <h3>title:{sec?.title}</h3>
            <h3>description:{sec?.desc}</h3>
            <button>X</button>
            {
                sec.tasks?.map((el,i)=>{

                    return(
                        <div key={i}>
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

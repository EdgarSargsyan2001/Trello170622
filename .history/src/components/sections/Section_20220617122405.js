
import './Section.css'

function Section(sec){


    return(
        <div>

            <h3>{sec.title}</h3>
            <h3>{sec.description}</h3>
            <button>X</button>
            {
                sec.tasks.map((el)=>{

                    return(
                        <div>
                            <p>{el.title}</p>
                        </div>
                    )
                })
            }

        </div>
    )



}


export default Section



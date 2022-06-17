
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
                            <span></span>
                        </div>
                    )
                })
            }

        </div>
    )



}


export default Section



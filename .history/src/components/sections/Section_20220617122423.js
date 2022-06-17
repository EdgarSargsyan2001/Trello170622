
import './Section.css'

function Section(sec){


    return(
        <div>

            description<h3>{sec.title}</h3>
            description:<h3>{sec.description}</h3>
            <button>X</button>
            {
                sec.tasks.map((el)=>{

                    return(
                        <div>
                            <p>{el.title}</p>
                            <p>{el.dec}</p>
                        </div>
                    )
                })
            }

        </div>
    )



}


export default Section



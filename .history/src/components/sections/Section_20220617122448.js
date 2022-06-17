
import './Section.css'

function Section(sec){


    return(
        <div>

            title:<h3>{sec.title}</h3>
            description:<h3>{sec.desc}</h3>
            <button>X</button>
            {
                sec.tasks.map((el)=>{

                    return(
                        <div>
                            <p>{el.title}</p>
                            <p>{el.desc}</p>
                        </div>
                    )
                })
            }

        </div>
    )



}


export default Section



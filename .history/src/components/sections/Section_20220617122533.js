
import './Section.css'

function Section(sec){


    return(
        <div>

            title:<h3>{sec?.title}</h3>
            description:<h3>{sec?.desc}</h3>
            <button>X</button>
            {
                sec?.tasks.map((el,i)=>{

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



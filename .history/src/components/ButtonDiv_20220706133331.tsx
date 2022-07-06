import { memo } from "react"

interface ButtonDivProps{
  showButtonTask:boolean,
  openModalFC:Function
}

memo() function ButtonDiv ({ openModalFC, showButtonTask }: ButtonDivProps) {
  console.log('button div up')
  return (
    <div className="buttonDiv">
        
        {showButtonTask && (
          <button
            className="AddTaskBtn"
            onClick={(): void => openModalFC('task')}
          >
            Task
          </button>
        )}
        <button
          className="AddSectionBtn"
          onClick={(): void => openModalFC('section')}
        >
          Section
        </button>
    </div>
  )
}

export default ButtonDiv
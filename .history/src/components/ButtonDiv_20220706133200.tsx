
interface ButtonDivProps{
  showButtonTask:boolean,
  openModalFC:Function
}

function ButtonDiv({ openModalFC, showButtonTask }: ButtonDivProps) {
  console.log('')
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
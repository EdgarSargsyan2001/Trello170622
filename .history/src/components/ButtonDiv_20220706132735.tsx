import React from 'react'

interface ButtonDiv

function ButtonDiv({openModalFC,showButtonTask}) {
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
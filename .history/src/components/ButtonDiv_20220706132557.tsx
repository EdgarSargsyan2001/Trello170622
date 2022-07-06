import React from 'react'

function ButtonDiv({b}) {
  return (
    <div className="buttonDiv">
        
        {sectionData[0] && (
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
import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import Section from './components/sections/Section';
import {useSelector} from 'react-redux'
import './App.css';

interface SecObj {
  title:string,
  desc:string,
  tasks:Array<object>,
  id:number
}

function App() {

  const [openModal,setOpenModal] = useState<boolean>(false)
  const [modalType,setModalType] = useState<string>('section')
  const sectionData = useSelector((state) => state.sections)

  //function ===================================

  const openModalFC = (type:string):void => {

    setModalType(4547)
    setOpenModal(true)
  
  }
    

  return (
    <div className="App">

      <div className='container' >
        {
          sectionData?.map((sec:SecObj)=>{
            
            return <Section 
                        key={sec.id} 
                        sec={sec}
                    />
          })
        }
      </div>
        {openModal && <div className="modal">
            <Modal 
              setOpenModal={setOpenModal}
              modalType={modalType}
            />
          </div>
        }
 
      <div className='buttonDiv'>

        {sectionData[0] &&
          <button className='AddTaskBtn' onClick={():void=>openModalFC('task')}>Task</button>
        }
          <button className='AddSectionBtn' onClick={():void=>openModalFC('section')}>Section</button>

      </div>
    </div>
  );
}

export default App;

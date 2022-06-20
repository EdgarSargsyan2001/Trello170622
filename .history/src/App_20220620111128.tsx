import { useState } from 'react';
import Modal from './components/Modal/Modal';
import Section from './components/sections/Section';
import {useSelector} from 'react-redux'
import './App.css';


function App() {

  const [openModal,setOpenModal] = useState<boolean>(false)
  const [modalType,setModalType] = useState<string>('section')
  const sectionData = useSelector((state):object => state.sections)

  //function ===================================

  const openModalFC = (type) => {

    setModalType(type)
    setOpenModal(true)
  
  }
    

  return (
    <div className="App">

      <div className='container' >
        {
          sectionData?.map((sec)=>{
            
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
          <button className='AddTaskBtn' onClick={()=>openModalFC('task')}>Task</button>
        }
          <button className='AddSectionBtn' onClick={()=>openModalFC('section')}>Section</button>

      </div>
    </div>
  );
}

export default App;

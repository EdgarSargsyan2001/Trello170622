import { useState } from 'react';
import Modal from './components/Modal/Modal';
import Section from './components/sections/Section';
import {useSelector} from 'react-redux'
import './App.css';

export interface SecObj {
  title:string,
  desc:string,
  tasks:Array<object>,
  id:number
}
export interface State {
  sections:Array<SecObj>,
  inputs:{title:string,desc:string},
  uniqueId:number

}

function App() {

  const [openModal,setOpenModal] = useState<boolean>(false)
  const [modalType,setModalType] = useState<string>('section')
  const sectionData = useSelector((state:State) => state.sections)

  //function ===================================

  const openModalFC = (type:string):void => {

    setModalType(type)
    setOpenModal(true)
  
  }
  
  //style ==========================================
  const modalStyle = {
    "linear-gradient":"(45deg,var(--accent-color),var(--base-color)"
  }

  return (
    <div className="App">

      <div className='container' >
        {
          sectionData?.map((sec):JSX.Element => {
            
            return <Section 
                        key={sec.id} 
                        sec={sec}
                    />
          })
        }
      </div>
        {openModal && <div style={modalType==='task'?(modalStyle:string):()} className="modal">
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

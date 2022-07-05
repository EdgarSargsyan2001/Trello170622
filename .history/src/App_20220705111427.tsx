import { useState } from 'react';
import Modal from './components/Modal/Modal';
import Section from './components/sections/Section';
import {useSelector} from 'react-redux'
import './App.css';

export interface SecObj {
  title:string,
  desc:string,
  tasks:Array<TaskObj>,
  id:number
  color1:string,
  color2:string
}
export interface TaskObj {
  title:string
  desc:string
  id:number
  color1:string
  color2:string
}
export interface State {
  sections:Array<SecObj>,
  inputs:{title:string,desc:string,color1:string,color2:string},
  uniqueId:number

}

function App() {

  const [openModal,setOpenModal] = useState<boolean>(false)
  const [modalType,setModalType] = useState<string>('section')
  const sectionData = useSelector((state:State) => state.sections)

//====function ===================================

    const openModalFC = (type:string):void => {

      setModalType(type)
      setOpenModal(true)
    
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
        {openModal && <div className='ModalBack'>
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

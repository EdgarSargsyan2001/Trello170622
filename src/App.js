import { useEffect, useState } from 'react';
import Modal from './components/Modal/Modal';
import Section from './components/sections/Section';
import './App.css';


function App() {

  
  const localData = localStorage.getItem('AllObj')
  const [sectionData,setSectionData] = useState(localData ? JSON.parse(localData) : [] )
  const [openModal,setOpenModal] = useState(false)
  const [modalType,setModalType] = useState('section')
  
  
  //useEffects ==================================
  
  useEffect(()=>{
    localStorage.setItem('AllObj',JSON.stringify(sectionData))
    
  },[sectionData])
  


  //function ===================================

  const openModalFC = (type) => {

    setModalType(type)
    setOpenModal(true)
  
  }
    

  return (
    <div className="App">

      <div className='container'>
        {
          sectionData?.map((sec)=>{
            
            return <Section 
                        key={sec.id} 
                        sec={sec}
                        setSectionData={setSectionData}
                    />
          })
        }
      </div>

      {openModal &&  
        <Modal 
          setSectionData={setSectionData}
          setOpenModal={setOpenModal}
          modalType={modalType}
        />
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

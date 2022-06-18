import { useEffect, useId, useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Section from './components/sections/Section';

// document.addEventListener("dragstart", function(event) {
//   event.dataTransfer.setData("Text", event.target.id);
// });

// document.addEventListener("dragover", function(event) {
//   event.preventDefault();
// });
// document.addEventListener("drop", function(event) {
//   event.preventDefault();

//   if ( event.target.className === "section") {
//     let data = event.dataTransfer.getData("Text");
//     event.target.appendChild(document.getElementById(data));
//   }


// });

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
          sectionData?.map((sec,i)=>{
            
            return <Section 
                        key={i} 
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

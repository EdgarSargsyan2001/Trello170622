import { useEffect, useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Section from './components/sections/Section';



function App() {

  
const [openModalSec,seOpenModalSec] = useState(false)

  // useEffect(()=>{
    
  //   localStorage.setItem('Allobj',JSON.stringify({id:1,section:[]}))


  // },[])



  const openModal = ()=>{


  }





  return (
    <div className="App">
      <Section />
      {openModalSec && 
        <Modal />

      }


      <button onClick={openModal}></button>
    </div>
  );
}

export default App;

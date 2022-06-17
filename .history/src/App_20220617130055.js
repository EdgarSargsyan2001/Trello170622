import { useEffect, useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Section from './components/sections/Section';



function App() {

  
const [openModalSec,seOpenModalSec] = useState(false)
const [secS,setSecS] = useState([])

  useEffect(()=>{
    if(!localStorage.getItem("AllObj"))
    localStorage.setItem('AllObj',JSON.stringify({id:1,section:[]}))


  },[])



  const openModal = (str)=>{
    if(str === 'sec')seOpenModalSec(true)

    
  }





  return (
    <div className="App">
      {
        secS.map((el)=>{
          
        })
      }

      
      <Section />
      {openModalSec && 
        <Modal />

      }


      <button 
        onClick={()=>openModal('sec')}
        
      >Section</button>

    </div>
  );
}

export default App;

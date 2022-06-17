import { useEffect, useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Section from './components/sections/Section';



function App() {

  
const [openModalSec,seOpenModalSec] = useState(false)
const [secS,setSecS] = useState([])
const [render,setRender] = useState('')

  useEffect(()=>{
    if(!localStorage.getItem("AllObj"))
    localStorage.setItem('AllObj',JSON.stringify({id:1,section:[]}))


  },[])

  useEffect(()=>{
    let AllObj = JSON.parse(localStorage.getItem('AllObj'))
    setSecS(AllObj.section)

  },[render])


  const openModal = (str)=>{
    if(str === 'sec')seOpenModalSec(true)

    
  }


  return (
    <div className="App">
      {
        secS?.map((sec,i)=> <Section key={i} sec={sec} />)
      }

      
      
      {openModalSec && 
        <Modal 
          setRender={setRender}
          seOpenModalSec={seOpenModalSec}
        />

      }


      <button 
        onClick={()=>openModal('sec')}
        
      >Section</button>

    </div>
  );
}

export default App;

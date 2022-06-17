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

  useEffect(()=>{
    let AllObj = JSON.parse(localStorage.getItem('AllObj'))
    console.log(AllObj.section)
    // setSecS(AllObj)

  },[])


  const openModal = (str)=>{
    if(str === 'sec')seOpenModalSec(true)

    
  }

  console.log(secS)



  return (
    <div className="App">
      {/* {
        secS?.map((sec,i)=> <Section key={i} sec={sec} />)
      } */}

      
      
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

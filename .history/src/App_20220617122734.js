import { useEffect, useState } from 'react';
import './App.css';
import Section from './components/sections/Section';



function App() {

  
useState(false)

  // useEffect(()=>{
    
  //   localStorage.setItem('Allobj',JSON.stringify({id:1,section:[]}))


  // },[])



  const openModal = ()=>{


  }





  return (
    <div className="App">
      <Section />


      <button onClick={openModal}></button>
    </div>
  );
}

export default App;

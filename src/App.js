
import './App.css';
//import Dark from './component/Dark';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';

import Alert from './component/Alert';

// import Dark_mode from './component/Dark_mode';
import Text from './component/Text';
import Dark from './component/Dark';


function App() {
  const[alert,setAlert]=useState(null)
  const showalert=(message,type)=>{
    setAlert( {
      message:message ,
      type:type
    })
  
    setTimeout(function(){
      setAlert(null)
    },3000)

  }


  const[mode,setMode]=useState('black')
  function toggle(){
    if(mode==='white'){
      setMode('black')
      showalert('Dark mode enable','Success')
  }
  else{
    setMode('white')
    showalert('Light mode enable','Success')
  }
}
 
  return (
   <>
   
  <Router>
      <Routes>
        <Route path="/" element={<Navbar  mode={mode} toggle={toggle}/>} />
        <Route path="/about" element={<Dark />} />
       
      </Routes>
    </Router>
  
    <Text heading="Enter text to analyse" showalert= {showalert} />
  
  <Alert alert={alert} />
  <Dark/>
  {/* <Dark_mode></Dark_mode> */}
   </>
  );
}

export default App;


import './App.css';
//import Dark from './component/Dark';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './component/Navbar';

import Alert from './component/Alert';

// import Dark_mode from './component/dark_mode';
import Text from './component/Text';
import Dark from './component/Dark';
import Render from './component/Render';
import New from './component/New';


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
  <Navbar title="WELCOME" mode={mode} toggle={toggle}/>
  <Text heading="Enter text to analyse" showalert= {showalert} />
     <Alert alert={alert} />
     {/* <Render></Render> */}
     <New></New>
      <Routes>
        <Route path="/" element={<Navbar title="WELCOME" mode={mode} toggle={toggle}/>} />

        {/* <Route path="/about" element={<Dark/> } /> */}
        <Route path='/about'element={<Dark/>} >
          
        </Route>

        

       
      </Routes>
   
       
    </Router>
   
   </>
  );
}

export default App;

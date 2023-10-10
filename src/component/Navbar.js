// import React from 'react'

import React from 'react';
import "../index.css"
import { Link } from 'react-router-dom';

export default function Navbar(props) {
 
  const my={
    
    backgroundColor:props.mode
  }
 

  return (
    <>
   
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
   <div className="container-fluid">
     <a className="navbar-brand" href="/">{props.title}</a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <a className="nav-link active" aria-current="page" href="/">Home</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="/">Link</a>
         </li>
         <li className="nav-item dropdown">
           <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Dropdown
           </a>
           <ul className="dropdown-menu">
             <li><a className="dropdown-item" href="/">Action</a></li>
             <li><a className="dropdown-item" href="/">Another action</a></li>
             <li><hr className="dropdown-divider"/></li>
             <li><a className="dropdown-item" href="/">Something else here</a></li>
           </ul>
         </li>
         
       </ul>
       <form className="d-flex" role="search">
         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
         <button className="btn btn-outline-success" type="submit">Search</button>
         
       </form>
     </div>
    
     

    
    
   </div>
 </nav>
 <div >
 <nav style={my}>
      
      <li><Link to="/about" >Action</Link></li>
      <li><Link to="/" >Home</Link></li>
      <li><a href="/" >About</a></li>
  </nav>
     
     </div>
    
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle}/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Enable dark mode</label>


     </div>
     <h1 style={{color:"red"}}>Thank You</h1>
 
     </>
  )
}

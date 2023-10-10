import React ,{useState} from 'react'

export default function Text(props) {

    const handle=()=>{
        let newtext=count.toUpperCase();
        setCount(newtext);
        props.showalert('Convert to uppercase','Success');

        
    }
    const change=(event)=>{
        console.log('change');
        setCount(event.target.value);
    }
    const [count, setCount] = useState('Enter text Here');


    
  return (
    <>
    
    
    <div className="mb-3">
    
    
  </div>
  <div className="mb-3">
    <h1>{props.heading}</h1>

    <textarea className="form-control" id="exampleFormControlTextarea1" value={count} onChange={change} rows="8"></textarea>
  </div>
  <button className="btn" onClick={handle}>Convert to Uppercase</button>
  <h2>{count.split(" ").length}</h2>
    <h2>{count.length}</h2>
    
    
    
    
    
    
    </>
  )
}

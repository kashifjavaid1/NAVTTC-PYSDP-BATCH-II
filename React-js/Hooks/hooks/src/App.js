import './App.css';
import { useEffect, useState } from 'react';
// usestate and useEffect
function App() {
const [show,setShow]=useState(false)
const onhandle=()=>{
 setShow(!show)
}
useEffect(()=>{
  console.log("render the useEffect");
  
},[show])
  return (
    <div className="App">
    
     <button onClick={onhandle}>{show?'hide':'show'}</button>
    </div>
  );
}

export default App;

import { useState } from "react"
import ToggleShow from "./component/ToggleShow"

function App() {
  const [show,setShow]=useState(true)
// const fun=(num1,num2,total)=>{
//   total=num1+num2;
//   alert(total)
// }

  return (
    <>
     {/* <button onClick={()=>fun(10,10)}>click</button> */}

     {/* <input type={show?"text":'password'} />
     <button onClick={()=>setShow(!show)}>show password</button> */}
     <button onClick={()=>setShow(!show)}>Show Toggle</button>
     {show?<ToggleShow/>:null}
    </>
  )
}

export default App

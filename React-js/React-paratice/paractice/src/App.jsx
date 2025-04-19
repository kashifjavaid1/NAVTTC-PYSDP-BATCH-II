import { useState } from "react"

function App() {
  const [show,setShow]=useState(false)
// const fun=(num1,num2,total)=>{
//   total=num1+num2;
//   alert(total)
// }

  return (
    <>
     {/* <button onClick={()=>fun(10,10)}>click</button> */}

     <input type={show?"text":'password'} />

     <button onClick={()=>setShow(!show)}>show password</button>
    </>
  )
}

export default App

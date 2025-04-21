import { useState } from "react"
import ToggleShow from "./component/ToggleShow"
import Showpassword from "./component/Showpassword"
import User from "./component/User"
import Wrapper from "./component/Wrapper";
import Parent from "./component/Parent";

function App() {
const [show,setShow]=useState(true);
  const [name,setName]=useState("kashif")
// const fun=(num1,num2,total)=>{
//   total=num1+num2;
//   alert(total)
// }
// let userInfo={
//   name:{name},
//   email:"kashif@gmail.com",
//   age:30
// }

const userInfo = ["kashif", "kashif@gmail.com", 39];

  return (
    <>
     {/* <button onClick={()=>fun(10,10)}>click</button> */}

     {/* <input type={show?"text":'password'} />
     <button onClick={()=>setShow(!show)}>show password</button> */}
     <button onClick={()=>setShow(!show)}>Show Toggle</button>
     {/* {show?<ToggleShow/>:null}
     <Showpassword/> */}
     {/* <User/> */}
     {/* <Wrapper color="pink" border="2px dotted pink">
     <h1>Hello EveryOne 1</h1>
     </Wrapper>  
     <Wrapper>
     <h1>Hello EveryOne 2</h1>
     </Wrapper> 
      <Wrapper color="blue" border="2px solid blue">
     <h1>Hello EveryOne 3</h1>
     </Wrapper>
     <Wrapper color='red' border="1px solid blue">
     <h1>Hello EveryOne 4</h1>
     </Wrapper>
     <Wrapper>
     <h1>Hello EveryOne 5</h1>
     </Wrapper> */}
     <Parent/>
    </>
  )
}

export default App

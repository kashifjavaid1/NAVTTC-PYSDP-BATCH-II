import React, { useMemo, useState } from 'react';

const FormMemo = () => {
    const [name,setName]=useState(null);
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
const [showName,setShowName]=useState(false);
const [showEmail,setShowEmail]=useState(false);
const [showPassword,setShowPassword]=useState(false)
const [showAll,setShowAll]=useState(false);
const nameFun=useMemo(()=>{
    return ()=>{
        console.log("name");
        setShowName(true)
    }
    
},[name])
   
    const emailFun=useMemo(()=>{
        return ()=>{
            console.log("email");
            setShowEmail(true)    
        }
    },[email])
   
    const passworfFun=useMemo(()=>{
        return ()=>{
            console.log("password");
       setShowPassword(true)        
        }
    },[password])

    const showAllData = useMemo(() => {
        return () => {
          console.log("All input fields show");
          setShowAll(true)
        }
      }, [])
      
    return (
        <div>
            {showName ? <h1>{name}</h1>:null}
            <input type='text' placeholder='Enter User Name' onChange={(e)=>{setName(e.target.value)}} required/>
            <button onClick={nameFun}>showName</button>
            <br />
            {showEmail ? <h1>{email}</h1>:null}
            <input type="email" placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)} required/>
            <button onClick={emailFun}>Show Email</button>
            <br />
            {showPassword ?<h1>{password}</h1>:null}
            <input type="password" placeholder='Enter your Password' onChange={(e)=>setPassword(e.target.value)} required/>
            <button onClick={passworfFun}>Show Password</button>
            <br />
            <br />
            {showAll ?<>
                <h1>{name}</h1>
    <h1>{email}</h1>
    <h1>{password}</h1>
            </> :null}
            <button onClick={showAllData}>click</button>
        </div>
    );
}

export default FormMemo;

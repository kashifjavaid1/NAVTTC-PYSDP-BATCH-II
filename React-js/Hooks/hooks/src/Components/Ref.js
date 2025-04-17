import React, { useState,useRef, useEffect, useMemo } from 'react';
// Get-ExectionPolicy
// Set-ExecutionPolicy RemoteSigned -Scops CurrentUser

// Project Create Commandc
// npx create-react-app 

// write filesing funcation
const Ref = () => {
    const [num,setNum]=useState(0);
    const [name,setName]=useState()
const inp1=useRef();
const inp2=useRef();
const parent=useRef();
    const fun1=()=>{
        console.log("button1");
      
    }
    useEffect(()=>{
            console.log('button2');
            inp2.current.focus();
      
            
    },[inp2])
    const fun2=useMemo(()=>{
        
        
       return ()=> {
        parent.current.classList.add('div')
        console.log("fun2");
        
       }
    })
    return (
        <div ref={parent}>
            <input ref={inp1}  type="number"  placeholder='Number' onChange={(e)=>setNum(e.target.value)}/>
            <input ref={inp2} type="text" placeholder='Text' onChange={(e)=>setName(e.target.value)} />
            <h1 className='changeNumber'>The Value of Number:{num}</h1>
            <h1 className='changeText'>The Value of Name:{name}</h1>
            <button onClick={fun1}>Button 1</button>
            <button onClick={fun2}>Button 2</button>
        </div>
    );
}

export default Ref;

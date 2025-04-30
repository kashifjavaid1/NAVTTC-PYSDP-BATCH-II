import React, { useEffect } from 'react';
import { useState } from 'react';

const Effect = () => {
    // handle the extra rendering of component on state
    const [counter,setCounter]=useState(0)
    const [data,setData]=useState(0)
    const fun=()=>{
        let a=10;
        let b=20;
        let result=a+b;
        console.log("value",result);
        
    }
    
    function abc() {
        console.log("funcation is called");
        
    }
   
    useEffect(()=>{
        abc() 
    },[data])
    return (
        <div>
            <button onClick={()=>setCounter(counter+1)}>counter{counter}</button>
            <button onClick={()=>setData(data+1)}>Data{data}</button>
        </div>
    );
}

export default Effect;

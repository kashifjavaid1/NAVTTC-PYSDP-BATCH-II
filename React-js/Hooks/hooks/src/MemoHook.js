import React, { useMemo, useState } from 'react';

const MemoHook = () => {
    const [count,setCount]=useState(0)
const dec=useMemo(()=>{
    return ()=>{
        
        if (count>0) {
                    console.log('value decrease',);
                    
                    setCount(count-1); 
                }
    }
},[count]);
   const res=useMemo(()=>{
       return ()=>{
      console.log("value 0");
    setCount(0)
  }
   },[count])
   const increase=useMemo(()=>{
   return ()=>{
    console.log("increase value");
    setCount(count+1)
   }
    
   })
    return (
      <div>
        <h1>Count:{count}</h1>
         <button onClick={increase}>Increment</button>
         <button onClick={res}>rester</button>
         <button onClick={dec}>Decrement</button>
      </div>
    );
}

export default MemoHook;

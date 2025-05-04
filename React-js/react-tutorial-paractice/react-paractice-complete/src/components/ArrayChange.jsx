import React, { useState } from 'react';

const ArrayChange = () => {
    const [change,setChange]=useState([
        "hamza","ali","kashif"
    ])
    const changeInput=(name)=>{
      
        change[change.length-1]=name
    
      setChange([...change]);
      console.log(change);
      
    }
    return (
        <div>
            <input type="text" onChange={(e)=>changeInput(e.target.value)} placeholder='Enter a Name' />
            {
                change.map((item,index)=>{
                  return(
                    <h1 key={index}>{item}</h1>
                  )
                })
            }
        </div>
    );
}

export default ArrayChange;

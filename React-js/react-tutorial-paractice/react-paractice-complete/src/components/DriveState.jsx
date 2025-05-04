import React, { useState } from 'react';

const DriveState = () => {
    const [name,setName]=useState([]);
    const [user,setUser]=useState("")
    const handluser=()=>{
      setName([...name,user])
    }
    console.log(name);
    const length=name.length
    return (
        <div>
            <h1>Drive state</h1>
            <h1>Total Length:{length}</h1>
            <input type="text" placeholder='Enter a Name' onChange={(e)=>setUser(e.target.value)} />
            <button onClick={handluser}>add user</button>
            {
                name.map((item)=>{
                    console.log(item);
                    
                    return(
                        <h1 key={item}>{item}</h1>
                    )
                })
            }
        </div>
    );
}

export default DriveState;

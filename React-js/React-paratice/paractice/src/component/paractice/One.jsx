import React, { useState } from 'react';

const One = () => {
    const [data,setData]=useState()
    const [emailVal,setEmailVal]=useState();
    const [addressVal,setAddressVal]=useState()
    const cle=()=>{
        setData("")
        setEmailVal("")
        setAddressVal("")
    }
    return (
        <div style={{margin:'20px',display:'flex',flexDirection:"column",width:'200px'}}>
           <input type="text" value={data} placeholder='Enter Name' onChange={(e)=>setData(e.target.value)} />
           <input type="email" value={emailVal} placeholder='Email' onChange={(e)=>setEmailVal(e.target.value)} style={{marginTop:'10px'}}/>
           <input type="text" value={addressVal} placeholder='Address' onChange={(e)=>setAddressVal(e.target.value)} style={{marginTop:'10px'}}/>
           <h1>Name:{data}</h1>
           <h1>Email:{emailVal}</h1>
           <h1>Address:{addressVal}</h1>
           <button onClick={cle}>clear</button>
        </div>
    );
}

export default One;

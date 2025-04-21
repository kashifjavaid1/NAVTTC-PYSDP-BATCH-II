import React, { useState } from 'react';

const One = () => {
    const [data,setData]=useState()
    return (
        <div>
           <input type="text" value={data} placeholder='Enter Name' onChange={(e)=>setData(e.target.value)} style={{margin:'10px'}}/>
           <h1>{data}</h1>
           <button onClick={()=>setData('')}>clear</button>
        </div>
    );
}

export default One;

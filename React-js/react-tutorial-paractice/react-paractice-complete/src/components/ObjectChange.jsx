import React, { useState } from 'react';

const ObjectChange = () => {
    const [data,setData]=useState({
        name:"kashif",
        result:{
         age:20,
         phone:3333
        }
    })
    const changeInput=(name)=>{
    setData({...data,name})
      console.log(data);
      
    }
    const changeAge=(age)=>{
        data.result.age=age
       setData({...data,age})
    }
    return (
        <div>
            <h1>Name:{data.name}</h1>
            <h1>Age:{data.result.age}</h1>
            <h1>Phone:{data.result.phone}</h1>
            <input type="text" placeholder='Enter a Name' onChange={(e)=>changeInput(e.target.value)} />
            <input type="text" placeholder='Enter a age' onChange={(e)=>changeAge(e.target.value)} />
        </div>
    );
}

export default ObjectChange;

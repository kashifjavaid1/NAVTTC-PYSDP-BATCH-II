import React, { useState } from 'react';
import Propeffect from './components/hooksparactice/propeffect';

const Parent = () => {
    // use effect side effect handle with props
  const [counter,setCounter]=useState(0);
  const [data,setData]=useState(0)
    return (
        <div>
            <Propeffect counter={counter} increse={data}/>
           <button onClick={()=>setCounter(counter+1)}>counter</button>
           <button onClick={()=>setData(data+1)}>data</button>
        </div>
    );
}

export default Parent;

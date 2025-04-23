import React, { useState } from 'react';

const Stat = () => {
    const [count,setCount]=useState(0)
    const fun=()=>{
        setCount(count+1)
    }
    return (
        <div>
            <button onClick={fun}>increase</button>
        </div>
    );
}

export default Stat;

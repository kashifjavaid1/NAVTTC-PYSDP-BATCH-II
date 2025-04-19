import React, { useState } from 'react';

const Showpassword = () => {
    const [password,setPassword]=useState("")
    const [Showpassword,setShowPassword]=useState(false)
    return (
        <div>
            <input type={Showpassword ? "text":"password"} onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={()=>setShowPassword(!Showpassword)}>Show Passowrd</button>
           <h1>{Showpassword ? password:"Hide Password"}</h1>
        </div>
    );
}

export default Showpassword;

import React, { useState } from 'react';

const SignUp = () => {
    const [fullName,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
   const signFun = async () => {
    console.log(fullName);
    console.log(email);
    console.log(password);

    let result = await fetch("http://localhost:5000/sign", {
        method: 'POST',
        body: JSON.stringify({
            fullName,
            email,
            password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    result = await result.json();
    console.log(result);
    if (result && result.token) {
        localStorage.setItem("user", JSON.stringify(result));
        alert("Signup successful!");
       
    } else {
        alert("Signup failed");
    }
};

    return (
        <div>
           <div className='form-container'>
           <div  className='main' >
            <input type="text" placeholder='Enter a Name' value={fullName} onChange={(e)=>setName(e.target.value)} />
            <input type="email" placeholder='Enter a Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='Enter a Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button className='btn' onClick={signFun}>Sign up</button>
           </div>
           </div>
        </div>
    );
}

export default SignUp;

import React, { useState } from 'react';

const CheckBox = () => {
    const [skills,setSkills]=useState([])

    // skills check and unchecked
    const skillFun=(event)=>{
if (event.target.checked) {
    setSkills([...skills,event.target.value])
}
else{
    setSkills([...skills.filter((item)=>item!=event.target.value)])
}
    }
    return (
        <>
        <div>
            <h1>Check the Skill's</h1>
            <input type="checkbox"  id='php' value='php' onChange={skillFun} />
            <label htmlFor="php">Php</label>
            <br />
            <input type="checkbox" id='node' value="node" onChange={skillFun} />
            <label htmlFor="node">Node</label>
            <br />
            <input type="checkbox" id='react' value="react" onChange={skillFun} />
            <label htmlFor="react">React</label>
            <br />
            <input type="checkbox" id='js' value='js' onChange={skillFun} />
            <label htmlFor="js">Js</label>
        </div>
        <h1>{skills.toString()}</h1>
        </>
    );
}

export default CheckBox;

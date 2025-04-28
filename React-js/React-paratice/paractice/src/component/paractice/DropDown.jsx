import React, { useState } from 'react';

const DropDown = () => {
    const [skill,setSkill]=useState([]);
    const [gender,setGender]=useState()
     const [city,setCity]=useState()
   const getValue=(e)=>{
    if (e.target.checked) {
          setSkill([...skill,e.target.value])
    }
    
    else{
        setSkill([...skill.filter((item)=>item!=e.target.value)])
    }
   }
    
    return (
        <>
        |
        
        <div>
            <input type="checkbox" name="java" value={"java"} onChange={getValue} />
            <label htmlFor="">JAVA</label>
            <br />
            <input type="checkbox" name='js'  value={"js"} onChange={getValue}/>
            <label htmlFor="">JS</label>
            <br />
            <input type="checkbox" name='html' value="html" onChange={getValue} />
            <label htmlFor="">HTML</label>
            <br />
            <input type="checkbox" name="php" value="php" onChange={getValue} />
            <label htmlFor="">PHP</label>
        </div>
        <div>
            <h1>Gender</h1>
            <input type="radio" name="gender"  checked={gender=="male"} onChange={(e)=>setGender(e.target.value)} value="male" id='male'/>
            <label htmlFor="male">Male</label>
            <br />
            <input type="radio" name="gender" checked={gender=="female"} onChange={(e)=>setGender(e.target.value)} id="female" value="female" />
            <label htmlFor="female">Female</label>
        </div>
        <br />
        <div>
            <select defaultValue={"china"} onChange={(e)=>setCity(e.target.value)}>
                <option value="pak" >Pakistan</option>
                <option value="china"  >China</option>
                <option value="usa" >Usa</option>
            </select>
        </div>
        <br />
        <h1>Gender:{gender}</h1>
        <h1>City:{city}</h1>
        <h1>Skills:{skill.toString()}</h1>
        </>

    );
}

export default DropDown;

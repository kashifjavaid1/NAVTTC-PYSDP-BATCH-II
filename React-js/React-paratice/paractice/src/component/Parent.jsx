import React, { useState } from 'react';
import One from './paractice/One';
import CheckBox from './paractice/CheckBox';
import DropDown from './paractice/DropDown';
import Timer from './paractice/Timer';
import Loop from './paractice/Loop';

const Parent = () => {
   
    const user=[
        {
             id:1,
            name:"Kashif",
            email:"gmdcf@gmail.com",
            age:20,
            rollNumber:248009
        },
        {
            id:2,
            name:"Ali",
            email:"ali@gmail.com",
            age:23,
            rollNumber:2480010
        },
        {
            id:3,
            name:"Hamza",
            email:"hamza@gmail.com",
            age:20,
            rollNumber:2480011
        },
        {
            id:4,
            name:"Adad",
            email:"asad@gmail.com",
            age:30,
            rollNumber:2480012
        },
        {
            id:5,
            name:"qasim",
            email:"qasim@gmail.com",
            age:28,
            rollNumber:2480020
        }
    ]
    const [color,setColor]=useState("green")
    return (
        <div>
            <select onChange={(e)=>setColor(e.target.value)}>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="white">white</option>
            </select>
            {/* <One/> */}
            {/* <CheckBox/> */}
            {/* <DropDown/> */}
            <Timer color={color}/>
         <h1>Loop</h1>
         
    
        {user.map(user => (
          <Loop key={user.id} user={user} />
        ))}
    

        </div>
    );
}

export default Parent;

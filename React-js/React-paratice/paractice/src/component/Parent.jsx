import React, { useState } from 'react';
import One from './paractice/One';
import CheckBox from './paractice/CheckBox';
import DropDown from './paractice/DropDown';
import Timer from './paractice/Timer';

const Parent = () => {
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
        </div>
    );
}

export default Parent;

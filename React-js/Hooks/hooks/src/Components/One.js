import React, { useState } from 'react';
import { createContext } from 'react';
// import Two from './Two';
import Four from './Four';
// create object 
export let GlobelData=createContext();
const One = () => {
    const [color,setColor]=useState('red');
    return (
        <>
                <GlobelData.Provider value={color}>
                  <Four/>
                </GlobelData.Provider>
        </>
    );
}

export default One;

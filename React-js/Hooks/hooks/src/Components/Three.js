import React from 'react';
import { useContext } from 'react';
import { GlobelData } from './One';
const Three = () => {
let GD=useContext(GlobelData);
    return (
        <>
       <h1>{GD}</h1>
        </>
    );
}

export default Three;

import React, { useContext } from 'react';
import { GlobelData } from './One';

const Four = () => {
    let textColor=useContext(GlobelData);
    let {name}=textColor
    
    return (
        <div>
            <div>
                <h1 style={{color:textColor}}>kashif</h1>
            </div>
        </div>
    );
}

export default Four;

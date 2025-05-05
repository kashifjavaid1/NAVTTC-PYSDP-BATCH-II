import React from 'react';
import UseToggle from './hooksparactice/useToggle';

const Toggle = () => {
    const [data, ToggleHandle] = UseToggle(true);

    
    return (
        <div>
            <button onClick={ToggleHandle}>Toggle</button>
          {data ?<h1>Show the Data</h1>:null}
        </div>
    );
}

export default Toggle;

import React from 'react';

const Wrapper = ({children,color="green",border="3px solid green"}) => {
    return (
        <div style={{color:color,border:border,width:'300px',marginTop:'10px'}}>
           {children}
        </div>
    );
}

export default Wrapper;

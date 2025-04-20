import React from 'react';

const User = ({student="Muhammad"}) => {
 
    
    return (
        // <div>
        //     <h1>Name:{student[0]}</h1>
        //     <h1>Email:{student[1]}</h1>
        //     <h1>Age:{student[2]}</h1>
        // </div>
        <div>
        <h1>Name:{student}</h1>
    </div>
    );
}

export default User;

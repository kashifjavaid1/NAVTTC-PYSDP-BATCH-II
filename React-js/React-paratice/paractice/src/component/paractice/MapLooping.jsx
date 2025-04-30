import React from 'react';

const MapLooping = ({user}) => {
    
    return (
        <div style={{border:"1px solid",width:"500px",margin:"10px",padding:"10px",marginLeft:"10px"}}>
           <h1>ID:<span>{user.id}</span></h1> 
           <h1>Name:<span>{user.name}</span></h1> 
           <h1>Email:<span>{user.email}</span></h1> 
           <h1>Age:<span>{user.age}</span></h1> 
           <h1>RollNumber:<span>{user.rollNumber}</span></h1> 
        </div>
    );
}

export default MapLooping;

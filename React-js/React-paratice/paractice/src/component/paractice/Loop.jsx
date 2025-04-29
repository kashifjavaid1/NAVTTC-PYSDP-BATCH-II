import React from 'react';

const Loop = ({user}) => {
   
    
    return (
        <div>
         <table border={1} style={{width:"600px",textAlign:"center"}}>
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>RollNumber</th>
                </tr>
            </thead>
            <tbody>
               <tr>
               <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.rollNumber}</td>
               </tr>
            </tbody>
         </table>
        </div>
    );
}

export default Loop;

import React from 'react';
import MapLooping from './paractice/MapLooping';

const ToggleShow = () => {
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
    return (
        <div>
           {
            user?.map((item)=>{
                return(
                    <MapLooping key={item?.id} user={item}/>
                )
            })
           }
        </div>
    );
}

export default ToggleShow;

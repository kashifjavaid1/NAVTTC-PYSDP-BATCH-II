import React, { useEffect, useState } from 'react';

const Timer = ({color}) => {
    const [time,setTime]=useState(0);
    useEffect(()=>{
        setInterval(()=>{
         setTime(new Date().toLocaleTimeString())
        },1000)
    },[])
    return (
        <div style={{color:color,backgroundColor:"black",width:'150px', padding:'20px', margin:"20px", borderRadius:'15px',textAlign:"center"}}>
            {time}
        </div>
    );
}

export default Timer;

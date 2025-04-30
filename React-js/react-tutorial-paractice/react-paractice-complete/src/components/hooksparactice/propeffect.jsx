import React, { useEffect } from 'react';

const Propeffect = ({counter,increse}) => {
    const stateFun=()=>{
        console.log("state funcation is call");
        
    }
//   const dataFun=()=>{
//     console.log("data fun is called");
    
//   }
   // useEffect(()=>{
    //     stateFun();

    // },[counter])
    // useEffect(()=>{
    //     dataFun();
    // },[])
    useEffect(()=>{
        console.log("component monunted");
        
    })
    useEffect(()=>{
   
       console.log("component update monunted");
       
    },[counter])
    useEffect(()=>{
        return ()=>{
            console.log("unamount component");
            
        }
    },[])
    return (
        <div>
         <h1>counter:{counter}</h1>    
         <h1>Data:{increse}</h1>    
        </div>
    );
}

export default Propeffect;

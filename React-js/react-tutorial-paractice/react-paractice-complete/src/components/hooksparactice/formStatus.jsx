import React, { useTransition } from 'react';

const FormStatus = () => {
    const [transion,setTransion]=useTransition(false) 
    // usrtransion hooks
    const transtaion= async()=>{
   setTransion( async()=>{
    await new Promise(res=>setTimeout(res,3000))
   })
    }
    
    return (
        <div>
            {
                transion ? <img style={{width:"100px",height:"100px"}} src='https://tse2.mm.bing.net/th?id=OIP.yDVoTXGcFVskVuDiLIJ4BQHaEK&pid=Api&P=0&h=220' alt='Not Loader'/>:null
            }
            <button onClick={transtaion}>click me</button>
        </div>
    );
}

export default FormStatus;

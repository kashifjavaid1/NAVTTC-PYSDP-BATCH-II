import React, { useState } from 'react';

const Dyanmic = () => {
    const [changeTheme,setChangeTheme]=useState({
        padding:"20px",
          width:"250px",
          border:"1px solid",
          margin:"10px",
          borderRadius:"10px",
    })
    const [white,setWhite]=useState()

    const changeThemestyle=(bgColor,textColor)=>{
        console.log(bgColor);
     
           
       setChangeTheme({...changeTheme,backgroundColor:bgColor,color:textColor})
    
    }
    return (
        <div>
            <button onClick={()=>changeThemestyle("black","white")}>changecolor</button>
            <button onClick={()=>changeThemestyle("white","black")}>changecolor</button>
            <div style={changeTheme}>
                <h1>card</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis placeat tempora soluta sit eligendi commodi.</p>
                <p>See more</p>
            </div>
        </div>
    );
}

export default Dyanmic;

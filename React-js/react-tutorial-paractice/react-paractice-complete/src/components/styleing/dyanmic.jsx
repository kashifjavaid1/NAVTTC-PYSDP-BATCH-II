import React, { useState } from 'react';

const Dyanmic = () => {
    const [changeColor, setChangeColor] = useState({ backgroundColor: "red" });

    const cardStyle={
        width:"300px", 
        padding:"10px",
        borderRadius:"10px",
        border:"1px solid black",
        margin:"10px",
        ...changeColor
    }
    const changeTheme=(background)=>{
     setChangeColor({backgroundColor:background})
    }
    return (
        <div>
            <button onClick={()=>changeTheme("green")}>changecolor</button>
            <div style={cardStyle}>
                <h1>card</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis placeat tempora soluta sit eligendi commodi.</p>
                <p>See more</p>
            </div>
        </div>
    );
}

export default Dyanmic;

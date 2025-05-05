import { useState } from "react";

const UseToggle = ({defult})=> {
    const [data,setData]=useState(defult);
    const ToggleHandle=()=>{
      setData(!data)
    }
    return [data, ToggleHandle];
}

export default UseToggle;

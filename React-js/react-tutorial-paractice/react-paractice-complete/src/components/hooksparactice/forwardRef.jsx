import React, { useRef } from 'react';
import UserInput from '../UserInput';

const ForwardRef = () => {
    const inputRef=useRef(null);
    const handleRef=()=>{
        inputRef.current.value="kashif",
        inputRef.current.placeholder="Enter a Name",
        inputRef.current.focus();
        inputRef.current.style.border="1px solid red"
        inputRef.current.style.outline="none"
    }
    return (
        <div>
            <UserInput ref={inputRef}/>
            <button onClick={handleRef}>Click</button>
        </div>
    );
}

export default ForwardRef;

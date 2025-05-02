import React, { useRef } from 'react';

const Ref = () => {
    const inputRef=useRef();
    const handlInput=()=>{
inputRef.current.focus()
inputRef.current.style.display="block"
inputRef.current.style.color="red"
inputRef.current.placeholder="Please Enter a Name"
inputRef.current.style.border="2px solid green"
inputRef.current.style.borderRadius="5px"
inputRef.current.style.outline="none"
inputRef.current.value
    }
    const hideInput=()=>{
        inputRef.current.style.display="none"
        console.log(inputRef.current.value);
        
    }
    return (
        <div>
            <input ref={inputRef} type="text" placeholder='Enter a Name' />
            <br />
            <button onClick={handlInput}>Click me</button>
            <button onClick={hideInput}>hide me</button>
        </div>
    );
}

export default Ref;

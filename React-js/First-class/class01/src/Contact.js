import React from 'react'
import './App.css';
import {useState}  from 'react'
function Contact() {
//    let [count,setCount]=useState(0);
   let [color,setColor]=useState('blue')
  return (
    <>
{/* {count++}
    <button onClick={()=>setCount(count)}>Click</button> */}
    <div className={color}></div>
    <button onClick={()=>setColor('green')}>Change color</button>
    </>
  )
}

export default Contact; 
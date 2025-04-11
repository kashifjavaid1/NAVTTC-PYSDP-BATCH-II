import React, { useEffect, useState } from 'react'

function Effect() {
    const [change,setChange]=useState('.red')
    useEffect(()=>{
        setChange('.blue')
    })
  return (
    <>
    <div>
      <h1></h1>
    </div>
    </>
  )
}

export default Effect
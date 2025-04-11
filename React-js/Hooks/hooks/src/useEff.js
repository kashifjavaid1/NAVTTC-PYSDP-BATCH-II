import React, { useState } from 'react'

function Effect() {
    const [change,setChange]=useState('red')
  return (
    <>
    <div className='red'></div>
    </>
  )
}

export default Effect;
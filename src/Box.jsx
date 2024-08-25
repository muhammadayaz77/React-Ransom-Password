import React, { useState } from 'react'

function Box() {
  let [num,setNum] = useState('');
  const handleRandomBtn = () => {
    let random = Math.random().toString(36).slice(2);
    setNum(random);
  }
  const handleCopyBtn = () => {
    navigator.clipboard.writeText(num);
    alert('Copy to clipboard')
  }
  return (
    <>
    <div className="card">
      <h2>Random Password Generator</h2>
      <input value={num} disabled readOnly type="text" placeholder='Enter a Password...' name="" id="" />
      <button className='btn random'
      onClick={handleRandomBtn}
      >Random Password</button>
      <button 
      onClick={handleCopyBtn}
      className='btn copy'>Tap to Copy</button>
    </div>
    </>
  )
}

export default Box
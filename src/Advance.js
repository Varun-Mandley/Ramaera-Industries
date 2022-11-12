import React from 'react';
import { BsInfoSquare } from 'react-icons/bs'


const Advance = () => {
  return (
    <>
      <div className='box'>
        <p style={{ fontSize: "28px", color: '#857676' }}><span style={{ verticalAlign: 'middle', color: '#fff' }}><BsInfoSquare /></span> &nbsp;You need to pay <br /> <span style={{ color: '#fff' }}> &#8377;</span> 550 to subscribe this membership</p>
      </div> <br />
      <button className='submitButton'>Pay Now</button>
    </>
  )
}

export default Advance;
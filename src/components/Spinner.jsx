import React from 'react'
import './spinnercss.css';
const Spinner = () => {
  return (
    <div className='absolute flex justify-center items-center mt-[50vh]'>
        <span class="loader"></span>
    </div>
  )
}

export default Spinner
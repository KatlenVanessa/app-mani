import React, { useState } from 'react';
import {HiOutlineMenu} from 'react-icons/hi'

const App = () => {
  const [closedNav, setClosedNav] = useState(false)

  const toggleNav = () => {
    setClosedNav()
  }
  return (
    <div className='flex'>
      <div className='w-56 h-screen bg-red-100'></div>
      <div className='flex-1 min-h-screen bg-blue-100'>
        <button onClick={toggleNav}>
          <HiOutlineMenu size={25}></HiOutlineMenu>
        </button>
      </div>
    </div>
  );
}

export default App;


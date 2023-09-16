import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const currentUser = useSelector((state)=>state.user.currentUser);

  return (
    <div className='w-full h-full '>
      <div className=' w-full h-full p-10 text-2xl '>
         <p>Welcome <span  className='font-bold uppercase'>{currentUser.displayName}</span></p>
      </div>
    </div>
  )
}

export default Profile
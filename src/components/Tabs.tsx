import React from 'react'
import { Outlet } from 'react-router-dom';
import TabNav from './TabNav';

const Tabs = () => {
  return (
    <div className='tabs'>
      <h1>tab Example.</h1>
      <TabNav />
      <Outlet />

      {/* tab navigation component */}

      {/* tab inner container */}
    </div>
  )
}

export default Tabs;

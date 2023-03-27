import React from 'react'
import { Outlet } from 'react-router-dom';
import TabNav from '../category2/TabNav';

const Tabs = () => {
  return (
    <div className='tabs'>
      <TabNav />
      <Outlet />

      {/* tab navigation component */}

      {/* tab inner container */}
    </div>
  )
}

export default Tabs;

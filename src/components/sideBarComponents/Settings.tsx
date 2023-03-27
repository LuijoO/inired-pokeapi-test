import React from 'react'
import { Outlet } from 'react-router-dom'
import TabNav1 from '../category1/TabNav1'

const Settings = () => {
  return (
    <div className='settings'>
      <TabNav1 />
      <Outlet />
    </div>
  )
}

export default Settings

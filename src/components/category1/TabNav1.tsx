import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const TabNav_1 = () => {

  const location = useLocation();

  return (
    <div className='tab-nav'>
        <Link to="/settings/tab1_1" className={location.pathname==='/settings/tab1_1'?'tab_active':'tab_inactive'}>tab1</Link>
        <Link to="/settings/tab1_2" className={location.pathname==='/settings/tab1_2'?'tab_active':'tab_inactive'}>tab2</Link>
        <Link to="/settings/tab1_3" className={location.pathname==='/settings/tab1_3'?'tab_active':'tab_inactive'}>tab3</Link>
    </div>
  )
}

export default TabNav_1

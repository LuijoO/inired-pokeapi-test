import React from 'react'
import  Tabs  from './Tabs'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './Dashboard'
import InnerContent from './InnerContent'
import Settings from './Settings'

import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'
import TabNav from './TabNav'
import TabInner from './TabInner'

const MainRoutes = () => (
      <Routes>
        <Route path="/" element={<InnerContent/>}>
          <Route path="/" element={<Navigate replace to="dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tabs" element={<Tabs />}>
            <Route path="/tabs" element={<Navigate replace to="tab1" />} />
            <Route path="tab1" element={<Tab1 />}/>
            <Route path="tab2" element={<Tab2 />}/>
            <Route path="tab3" element={<Tab3 />}/>
          </Route>
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
  )

export default MainRoutes

import React from "react";
import Tabs from "../components/sideBarComponents/Tabs";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./sideBarComponents/Dashboard";
import InnerContent from "../components/sideBarComponents/InnerContent";
import Settings from "../components/sideBarComponents/Settings";

import Tab1 from "./category2/Tab1";
import Tab2 from "./category2/Tab2";
import Tab3 from "./category2/Tab3";
const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<InnerContent />}>
      <Route path="/" element={<Navigate replace to="dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tabs" element={<Tabs />}>
        <Route path="/tabs" element={<Navigate replace to="tab1" />} />
        <Route path="tab1" element={<Tab1 />} />
        <Route path="tab2" element={<Tab2 />} />
        <Route path="tab3" element={<Tab3 />} />
      </Route>
      <Route path="/settings" element={<Settings />}>
        <Route path="/settings" element={<Navigate replace to="tab1_1" />} />
        <Route path="tab1_1" element={<Tab1 />} />
        <Route path="tab1_2" element={<Tab2 />} />
        <Route path="tab1_3" element={<Tab3 />} />
      </Route>
    </Route>
  </Routes>
);

export default MainRoutes;

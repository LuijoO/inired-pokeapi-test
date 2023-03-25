import React from 'react';
import MainRoutes from './components/Routes';
import SideBar from './components/SideBar';
import './styles.css'

function App() {
  return (
    <div className='app'>
      {/* SideBar */}
      <SideBar />

      {/* inner container */}
      <MainRoutes />
    </div>
  );
}

export default App;

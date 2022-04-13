import React from 'react'
import {useState} from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';

function HomePage() {

  const [sidebarOpen,setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  }

  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  return (
    <div>
        <Navbar sidebarOpen = {sidebarOpen} openSidebar = {openSidebar} />
        <Sidebar sidebarOpen = {sidebarOpen} closeSidebar = {closeSidebar} />{openSidebar}
    </div>
  )
}

export default HomePage
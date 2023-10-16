import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const Home = () => {
  const [open,setOpen]=useState(false);

  const OpenSidebar = () =>{
    setOpen((prev)=>!prev)
  }

  return (
    <div>
        <Sidebar open={open} />
        <Navbar OpenSidebar={OpenSidebar}/>
        <Card />
    </div>
  )
}

export default Home
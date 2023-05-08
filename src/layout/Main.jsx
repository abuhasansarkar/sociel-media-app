import React from 'react';

import { Outlet } from 'react-router-dom';

import "./main.scss"
import LeftSidebar from '../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../components/RightSidebar/RightSidebar';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {
     return (
          <>
               <Navbar/>
               <div className="main-section">
                    <LeftSidebar/>
                    <Outlet/>
                    <RightSidebar/>
               </div>
          </>
     );
};

export default Main;
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <FaIcons.FaLaptop />,
    cName: 'nav-text'
  },
  {
    title: 'User Profile',
    path: '/userProfile',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Active Cases',
    path: '/activeCases',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  
];


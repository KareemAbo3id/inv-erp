import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import UserSetting from '../pages/userPages/UserSetting';
import Customers from '../pages/custPages/Customers';
import Inventory from '../pages/stockPages/Inventory';
import Suppliers from '../pages/supplierPages/Suppliers';

export const routersLinks = [
  { text: 'العملاء', page: <Customers /> },
  { text: 'المخزون', page: <Inventory /> },
  { text: 'الموردون', page: <Suppliers /> },
];

export const userOptions = [
  {
    text: 'Setting',
    icon: <SettingsIcon fontSize="0.6rem" />,
    page: <UserSetting />,
  },
  {
    text: 'Logout',
    icon: <LogoutIcon fontSize="0.6rem" />,
  },
];

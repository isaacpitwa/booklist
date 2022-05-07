import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function Navbar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <nav className="nav-bar">
      <div className="left">
        <h3>Bookstore CMS</h3>
        <ul className="menu-nav">
          {links.map((link) => <li key={link.id}><NavLink to={link.path} exact="true">{link.text}</NavLink></li>)}
        </ul>
      </div>
      <div className="account-icon"><FaUser className="user-icon" /></div>
    </nav>
  );
}
export default Navbar;

import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png';

const Navbar = () => {
      return (
            <div className='flex justify-between items-center'>
                  <div className=''></div>
                  <div className='nav gap-5 flex'>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/about'}>About</NavLink>
                        <NavLink to={'/Carrer'}>Carrer</NavLink>
                  </div>
                  <div className='login-info flex gap-2 justify-between'>
                        <img src={user} alt="" />
                        <button className='btn btn-primary px-2'>Login</button>
                  </div>
            </div>
      );
};

export default Navbar;
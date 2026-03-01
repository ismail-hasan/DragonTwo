import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
      return (
            <div>
                  <section className='flex items-center justify-center flex-col'>
                        <img className='w-[400px]' src={logo} alt="" />
                        <p className='text-accent'>Lorem ipsum dolor sit.</p>
                        <p>{format(new Date(), "EEEE, MMMM, dd, yyyy")}</p>
                  </section>
            </div>
      );
};

export default Header;
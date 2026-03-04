import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoGithub } from 'react-icons/io';
import FindUs from '../FindUs';

const RightAside = () => {
      return (
            <div>
                  <h2 className='mb-6 text-2xl font-semibold'>Login Here</h2>


                  <button className='w-full btn btn-outline btn-error mb-4'><FcGoogle size={28} />Sign In Google</button>

                  <button className='w-full btn btn-outline mb-4'><IoLogoGithub size={28} />Sign In Google</button>


                  <section>
                        <FindUs></FindUs>
                  </section>

            </div>
      );
};

export default RightAside;
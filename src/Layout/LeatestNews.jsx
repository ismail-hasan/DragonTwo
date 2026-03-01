import React from 'react';
import Marquee from 'react-fast-marquee';

const LeatestNews = () => {
      return (
            <>
                  <div className='flex text-white bg-base-200 items-center'>
                        <p className='color-base-100 bg-secondary p-5 mr-4'>Leatest</p>

                        <Marquee>
                              <p className='text-gray-800 ml-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aperiam nisi dolores quidem quo officia delectus unde impedit, id voluptate doloribus nostrum similique ad alias corrupti ipsam! Recusandae, quo dolor.</p>
                        </Marquee>
                  </div>
            </>
      );
};

export default LeatestNews;
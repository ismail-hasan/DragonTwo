import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then(res => res.json())
const Categories = () => {
      const categories = use(categoryPromise)
      return (

            <div>
                  <h3>All Categorories {categories.length}</h3>


                  <div className='grid grid-cols-1 my-5'>
                        {
                              categories.map((category) => <NavLink key={category.id} to={`/category/${category.id}`} className={"btn py-2 border-0 bg-base-100 hover:bg-base-200 text-accent"}>{category.name}</NavLink>)
                        }
                  </div>
            </div >
      );
};

export default Categories;
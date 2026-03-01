import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Componentes/NewsCard';

const CategoryPage = () => {
      const [newsData, setNewsData] = useState([])
      const { id } = useParams()
      const data = useLoaderData()

      useEffect(() => {
            if (id == "0") {
                  setNewsData(data)
                  console.log("hello", data.category_id)
                  return;
            }
            else if (id == "1") {
                  const totalData = data.filter(singleNews => singleNews.others.is_today_pick == true)
                  setNewsData(totalData)
            }
            else {
                  const totalData = data.filter(singleNews => singleNews.category_id == id)
                  setNewsData(totalData)
            }

      }, [id, data])

      return (
            <div>
                  <h3 className='py-3 font-semibold text-error'> Total Result {newsData.length} Found</h3>

                  <div className='grid grid-cols-1 gap-5'>
                        {
                              newsData.map(singleNews => (<NewsCard key={newsData.id} singleNews={singleNews}></NewsCard>))
                        }
                  </div>
            </div>
      );
};

export default CategoryPage;
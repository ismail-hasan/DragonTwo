import React from "react";
import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ singleNews }) => {
      console.log("dd", singleNews)
      const {
            title,
            image_url,
            details,
            total_view,
            rating,
            author,
      } = singleNews;

      return (
            <div className="max-w-full mx-5  bg-white shadow-lg rounded-xl overflow-hidden border">

                  {/* Author Section */}
                  <div className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                              <img
                                    src={author.img}
                                    alt={author.name}
                                    className="w-10 h-10 rounded-full"
                              />
                              <div>
                                    <h4 className="font-semibold text-sm">{author.name}</h4>
                                    <p className="text-xs text-gray-500">
                                          {new Date(author.published_date).toDateString()}
                                    </p>
                              </div>
                        </div>
                  </div>

                  {/* Image */}
                  <img
                        src={image_url}
                        alt={title}
                        className="w-full h-52 object-cover"
                  />

                  {/* Content */}
                  <div className="p-4">
                        <h2 className="font-bold text-lg mb-2">{title}</h2>

                        <p className="text-sm text-gray-600 mb-3">
                              {details.length > 120
                                    ? details.slice(0, 120) + "..."
                                    : details}
                        </p>

                        <button className="text-blue-600 text-sm font-semibold">
                              Read More
                        </button>

                        {/* Rating + Views */}
                        <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1 text-orange-500">
                                    <FaStar />
                                    <span>{rating.number}</span>
                              </div>

                              <div className="flex items-center gap-1">
                                    <FaEye />
                                    <span>{total_view}</span>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default NewsCard;
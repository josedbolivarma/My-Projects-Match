import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { dataProjects } from '../../data/projects';

export const BlogCard = ({ item }) => {

    const navigate = useNavigate();
    const { title, desc, host, id, img, repository } = item;


  return (
    <div className="w-full h-[300px] relative overflow-hidden group">
      <img
        src={ img }
        alt="Title"
        layout="fill"
        className="group-hover:opacity-50"
      />
      <div className="group-hover:bottom-[-25%] absolute bottom-[-70%] text-center left-[50%] translate-x-[-50%] w-full h-full text-white transition-all duration-300">
        <h2 className="text-4xl">{ title }</h2>
        <p className="text-1xl">{ desc }</p>
        <div className="flex flex-col items-center justify-between gap-2 mt-4">
          <button onClick={ () => navigate(`/match/${id}`) } className="group-hover:opacity-100 opacity-0 h-[30%] py-2 px-4 transition-opacity duration-300">
            See More
          </button>
          <div className="w-full flex items-center justify-around mt-3 px-2">
            <a className="text-2xl font-bold uppercase hover:border-b" href={host}>
              Deployment
            </a>
            <a className="text-2xl font-bold uppercase hover:border-b" href={repository}>
              Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

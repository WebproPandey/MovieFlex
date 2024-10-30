import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <div className='w-[20%] h-screen  bg-gray-700 border-r border-white'>
       <div className="text-2xl text-red-500   font-bold text-center  p-2">Movieflix</div>
       <div className='pl-5 pt-2 pb-0'>
         <h1 className="text-lg uppercase font-semibold  mt-2  mb-3  text-white">menu</h1>
         <div className='h-full w-full'>
           <nav className='w-full  flex flex-col gap-2  text-slate-400'>
             <Link to="" className='text-md pl-2 hover:bg-gray-800 hover:text-white  duration-100 text-start py-3 rounded-md '>
             <i className=" mr-2 ri-home-9-line"></i>
              Home
             </Link>
             <Link to="" className='text-md pl-2 hover:bg-gray-800   hover:text-white duration-100 text-start py-3 rounded-md '>
             <i className=" mr-2 ri-fire-line"></i>
             Tranding</Link>
             <Link to="" className='text-md pl-2 hover:bg-gray-800  hover:text-white duration-100 text-start py-3 rounded-md '>
             <i className=" mr-2 ri-tv-line"></i>
             TV Show</Link>
             <Link to=""  className='text-md pl-2 hover:bg-gray-800   hover:text-white duration-100 text-start py-3 rounded-md '>
             <i className=" mr-2 ri-movie-line"></i>
             Movies</Link>
             <Link to=""  className='text-md pl-2 hover:bg-gray-800   hover:text-white duration-100 text-start py-3 rounded-md '>
             <i className=" mr-2 ri-list-view"></i>
             My List</Link>
           </nav>
         </div>
       </div>
       <div className='pl-5 pt-2'>
         <h1 className="text-lg uppercase font-semibold    text-white">Setting</h1>
         <div className='h-full w-full'>
           <nav className='w-full  flex flex-col gap-2  text-slate-400'>
             <Link to="" className='text-md pl-2 hover:bg-gray-800 hover:text-white  duration-100 text-start py-3 rounded-md '>
             <i className=" mr-2 ri-home-9-line"></i>
              About
             </Link>
             <Link to="" className='text-md pl-2 hover:bg-gray-800   hover:text-white duration-100 text-start py-3 rounded-md '>
             <i className=" mr-2 ri-fire-line"></i>
             Contact</Link>
             <Link to="" className='text-md pl-2 hover:bg-gray-800  hover:text-white duration-100 text-start py-3 rounded-md '>
             <i className=" mr-2 ri-tv-line"></i>
             TV Show</Link>
             <Link to=""  className='text-md pl-2 hover:bg-gray-800   hover:text-white duration-100 text-start py-3 rounded-md '>
             <i className=" mr-2 ri-movie-line"></i>
             Help Center</Link>
           </nav>
         </div>
       </div>
    </div>
  )
}

export default SideNav
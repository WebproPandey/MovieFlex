import React from 'react'
import SideNav from './Partical/SideNav'
import TopNav from './Partical/TopNav'

export const Home = () => {
  return (
    <div className='h-screen w-full  bg-gray-800 flex'>
      <SideNav />
      <div className="w-[100%] h-full flex  flex-col  items-center">
       <TopNav/>
      </div>

    </div>
  )
}

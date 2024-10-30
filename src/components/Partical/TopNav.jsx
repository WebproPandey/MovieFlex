import { useState } from "react"
import { Link } from "react-router-dom"

const TopNav = () => {
  let [ state , setState] =   useState("")
  
  return (

    <div className="w-[80%] h-[10vh] relative  flex justify-center  items-center mx-auto" >
    <div className="w-[50%] flex text-center relative ">
    <i className="ri-search-line   text-white text-xl" ></i>
        <input
         onChange={(e) => setState(e.target.value)} 
         value={state}
         type="text"
         placeholder="Search Movie"
         className="w-[100%]  pl-1 mx-5 rounded-sm outline-none border-b bg-transparent text-zinc-200 " />
         {state.length > 0 && (
             <i onClick={() =>  setState("")} className=" ri-close-large-line text-xl absolute right-0 text-white"></i>
         )}
    </div>
        <div className="max-h-[50vh] w-[50%]  absolute bg-gray-200 top-[90%] overflow-auto ">
            {/* <Link className="p-6  hover:bg-black/30  hover:text-white duration-100 inline-block w-full border-b border-black/40">
              <img src="" alt="" />
              <span className="font-semibold">Hello EveryOne</span>
            </Link> */}
          
        </div>
    </div>
  )
}

export default TopNav
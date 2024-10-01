import React from 'react'

const Img = () => {
  return (
    <div className='w-full h-screen  flex justify-between  '>
      <div className="div w-[30%] h-full bg-black">

      </div>
      <div className="side w-[70%] text-white h-full flex flex-col ">
        <div className="nav flex p-4 px-[30%] rounded-md gap-5 text-2xl justify-between items-center w-full h-90% bg-">
          {["Home","About", "Work" , "Contact" , "Blog"].map((item)=>{
            <a key={item}  href="{`#${item.toLowerCase}`}">{item}</a>
          })}
        </div>
        <div className="img w-full   h-[90%]">
        <img className='w-full object-cover h-full ' src="https://images.unsplash.com/photo-1725476423126-84a1d3aee9c1?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Img

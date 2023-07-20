import Image from "next/image";
import React from "react";

const Tool = (tool:{boxShadow:string, image:string, height:number,width:number}) => {
    const [isHovered, setIsHovered] = React.useState(false);
  return (
    <>
      <div className='flex'>
          <div 
              className="flex justify-center items-center flex-col hover:-translate-y-3 sm:p-4 w-[80px] h-[80px] p-2 bg-zinc-900 sm:rounded-[15px] rounded-[12px] duration-500 ease-in-out cursor-pointer"
              style={{
                  boxShadow: isHovered ? `${tool.boxShadow}` : "",
                  outline: false ? "" : "1.5px solid #4c4c4cc5",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
          >
              <Image
                  src={tool.image}
                  alt='Picture of the author'
                  width={tool.height}
                  height={tool.width}
                  className='duration-500 ease-in-out hover:scale-105'
              />
          </div>
      </div>
    </>
  )
}

export default Tool
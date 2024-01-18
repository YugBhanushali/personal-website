import Image from "next/image";
import React, { use, useEffect } from "react";
import Demo from "./ui/Demo";

const Location = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState<{
    hours: string;
    minutes: string;
    seconds: string;
  }>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  function stringParser(date: number) {
    return date < 10 ? `0${date}` : String(date);
  }

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setCurrentTime({
        hours: stringParser(date.getHours()),
        minutes: stringParser(date.getMinutes()),
        seconds: stringParser(date.getSeconds()),
      });
    }, 1000);
  }, []);

  return (
    <>
      <Demo className="flex flex-col bg-zinc-900 p-6 rounded-[44px] items-center hover:border-[#ffffff6e] hover:scale-105 duration-500 ease-in-out cursor-pointer">
        {/* <div
        className="flex flex-col bg-zinc-900 p-6 rounded-[44px] items-center hover:bg-white hover:bg-opacity-[0.15] hover:border-[#ffffff6e] hover:scale-105 duration-500 ease-in-out cursor-pointer"
        style={{ outline: "1.5px solid #4c4c4cc5" ,
        boxShadow: isHovered ? `0px 0px 20px 0px #58d68d` : "",}}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
      > */}
        {/* location image */}
        <div>
          <Image
            src="/assets/location/location.png"
            alt="location"
            width={300}
            height={300}
            className={`rounded-[30px]`}
          />
        </div>

        {/* time and date and place */}
        <div className="mt-4 flex flex-col items-center">
          <div>
            <p className="font-bold text-[20px]">Gujarat, India</p>
          </div>
          <div>
            <p className="mt-2">
              {currentTime.hours}:{currentTime.minutes}:{currentTime.seconds}
            </p>
          </div>
        </div>
      </Demo>
      {/* </div> */}
    </>
  );
};

export default Location;

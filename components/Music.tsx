import { musicData } from "@/utils/Constants";
import { formatTime } from "@/utils/Fuctions";
import { Slider } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { BsFillPlayFill, BsFillVolumeOffFill, BsPauseFill
} from "react-icons/bs";
import {IoPlayForward, IoPlayBack
} from "react-icons/io5";
import {BsFillVolumeUpFill} from "react-icons/bs";

const Music = () => {
  const audioElement = React.useRef<any>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [songs, setSongs] = React.useState(musicData);
  const [currentSongTime, setCurrentSongTime] = React.useState(0);
  const [totalSongTime, setTotalSongTime] = React.useState(0);
  const [currentSongIndex, setCurrentSongIndex] = React.useState(0);
  const [currentVolume, setCurrentVolume] = React.useState(0);
  const [onMove, setOnMove] = React.useState({
    forBar: false,
    forVolume: false,
  });
  const [initialRender, setInitialRender] = React.useState(true);
  const [isHovering, setIsHovering] = React.useState(false);

  const playSong = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioElement.current.pause();
    } else {
      audioElement.current.play();
    }
  };

  const handleVolumeChange = (value:any) => {
    setCurrentVolume(value);
    audioElement.current.volume = value;
    if(initialRender){
      setInitialRender(false);
      setOnMove((prevState) => ({
        ...prevState,
        forVolume: false,
      }))
    }
    else{
      setOnMove((prevState) => ({
        ...prevState,
        forVolume: true,
      }))
    }
  };
  

  const getTotalSongTime = () => {
    return Number(audioElement.current.duration.toFixed(0));
  };

  const handleProgressBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    setCurrentSongTime(newTime);
    audioElement.current.currentTime = newTime;
  };

  const progressBarStyle = {
    width: `${(currentSongTime / totalSongTime) * 100}%`,
  };


  React.useEffect(() => {
    audioElement.current.addEventListener("timeupdate", () => {
      setCurrentSongTime(audioElement.current.currentTime);
    });
    setTotalSongTime(getTotalSongTime());
    console.log(currentVolume);
    handleVolumeChange(audioElement.current.volume);
    
  }, []);

  return (
    <>
    <div
      className="flex flex-col bg-zinc-900 p-6 rounded-[30px] gap-y-2  hover:scale-105 transition-all duration-500 ease-in-out"
      style={{ outline: "1.5px solid #4c4c4cc5",
      // boxShadow:  "0px 0px 10px 4px #ffffff1a"
      boxShadow: isHovering ? "0px 0px 20px 5px #ffffff7a" : "0px 0px 0px 0px #ffffff00"
     }}
      onMouseOver={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* music image */}
      <div>
        <Image
          src={songs[currentSongIndex].image}
          alt="Picture of the author"
          width={300}
          height={600}
          className="duration-500 max-h-[350px] w-full rounded-[20px]"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      {/* music title and play & pause */}
      <div className="flex flex-row max-w-[300px] justify-between items-center mt-3 z-1">
        {/* music title */}
        <div className="flex flex-col justify-start">
          <div className="text-white text-[18px] font-bold">
            Cornfield Chase
          </div>
          <div className="text-[13px] text-gray-400">
            Hans Zimmer
          </div>
        </div>

        {/* play & pause */}
        <div className="flex mt-1 flex-row items-center justify-center gap-x-4">
        <AnimatePresence>
          <div>
            {isPlaying ? (
              <motion.div
                key="pause"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              >
                <BsPauseFill
                  className="text-white text-3xl cursor-pointer"
                  onClick={playSong}
                />
              </motion.div>
            ) : (
              <motion.div
                key="play"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              >
                <BsFillPlayFill
                  className="text-white text-3xl cursor-pointer"
                  onClick={playSong}
                />
              </motion.div>
            )}
          </div>
        </AnimatePresence>
        </div>
      </div>


      <div className="flex flex-col items-center justify-center gap-y-2">
        {/* music progress bar */}
        <div className="flex flex-row mt-[10px] items-center justify-center">
          <div className={`flex flex-row gap-2 text-[13px] justify-center items-center ${onMove.forBar ? `text-gray-200` : `text-gray-400`} duration-300 ease-in-out`}>
            <div>{formatTime(Number(currentSongTime.toFixed(0)))}</div>
            <div>
              <Slider
                value={currentSongTime}
                min={0}
                max={totalSongTime}
                onChange={
                  (value) => {
                    setCurrentSongTime(value);
                    audioElement.current.currentTime = value;
                    setOnMove((prevState) => ({
                      ...prevState,
                      forBar: true,
                    }))
                  }
                }
                className="w-[170px] h-2 bg-transparent text-black rounded mt-[7px]"
                trackStyle={{ backgroundColor: onMove.forBar ? "#fff" : "#c4c4c4d1", height : '5px' }}
                railStyle={{ backgroundColor: "#c4c4c452", height : '5px'}}
                tooltip={
                  {
                    open: false,
                  }
                }
                onAfterChange={()=>setOnMove((prevState) => ({
                  ...prevState,
                  forBar: false,
                }))}
              />
            </div>
            <div>-{formatTime(totalSongTime-Number(currentSongTime.toFixed(0)))}</div>
          </div>

          <audio loop ref={audioElement} src={songs[currentSongIndex].audio} />

        </div>

        {/* volume controller */}
        <div className="flex flex-row gap-x-2 justify-center items-center">
          <div>
            <BsFillVolumeOffFill className={`${onMove.forVolume ? `text-white` : `text-gray-500`} ease-in-out duration-200 text-3xl cursor-pointer`}/>
          </div>
          <div>
              <Slider
                value={currentVolume}
                min={0}
                max={1}
                step={0.01}
                onChange={handleVolumeChange}
                className="w-[190px] h-2 bg-transparent text-black rounded mt-[7px] transition ease-in-out duration-200"
                trackStyle={{ backgroundColor: onMove.forVolume ? "#fff" : "#c4c4c4d1", height : '5px' }}
                railStyle={{ backgroundColor: "#c4c4c452", height : '5px' }}
                tooltip={
                  {
                    open: false,
                  }
                }
                onAfterChange={()=>setOnMove((prevState) => ({
                  ...prevState,
                  forVolume: false,
                  }))}
              />
          </div>
          <div>
            <BsFillVolumeUpFill className={`${onMove.forVolume ? `text-white` : `text-gray-500`} ease-in-out duration-200 text-3xl cursor-pointer`}/>
          </div>
        </div>
      </div>


      
      


    </div>
    </>
  );
};

export default Music;

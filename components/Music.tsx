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

    handleVolumeChange(audioElement.current.volume);
  }, [currentSongIndex,totalSongTime]);

  return (
    <>
    <div
      className="flex flex-col bg-zinc-900 p-6 rounded-[30px] "
      style={{ outline: "1.5px solid #4c4c4cc5" }}
    >
      {/* music image */}
      <div>
        <Image
          src={songs[currentSongIndex].image}
          alt="Picture of the author"
          width={300}
          height={400}
          className="duration-500 max-h-[400px] rounded-[20px]"
        />
      </div>

      {/* music title */}
      <div className="flex flex-col justify-center items-center mt-3">
        <div className="text-white text-xl font-bold">
          Cornfield Chase
        </div>
        <div className="text-[13px] text-gray-400">
          Hans Zimmer
        </div>
      </div>

      {/* music progress bar */}
      <div className="flex flex-row mt-[20px] items-center justify-center">
        <div className="flex flex-row gap-3 text-[13px] justify-between items-center">
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
                  console.log(value);
                }
              }
              className="w-[160px] h-2 bg-transparent text-black rounded mt-[7px]"
              trackStyle={{ backgroundColor: "#c4c4c4" }}
              railStyle={{ backgroundColor: "#c4c4c45e" }}
              tooltip={
                {
                  open: false,
                }
              }
            />
          </div>
          <div>-{formatTime(totalSongTime-Number(currentSongTime.toFixed(0)))}</div>
        </div>

        <audio loop ref={audioElement} src={songs[currentSongIndex].audio} />

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

      {/* volume controller */}
      <div className="flex flex-row gap-x-3 justify-center items-center">
        <div>
            <BsFillVolumeOffFill className="text-[#dcdcdca9] text-3xl cursor-pointer"/>
        </div>
        <div>
            <Slider
              value={currentVolume}
              min={0}
              max={1}
              step={0.01}
              onChange={handleVolumeChange}
              className="w-[160px] h-2 bg-transparent text-black rounded mt-[7px]"
              trackStyle={{ backgroundColor: "#c4c4c4" }}
              railStyle={{ backgroundColor: "#c4c4c45e" }}
              tooltip={
                {
                  open: false,
                }
              }
              handleStyle={
                {
                }
              }
            />
        </div>
        <div>
          <BsFillVolumeUpFill className="text-[#dcdcdca9] text-3xl cursor-pointer"/>
        </div>
      </div>

    </div>
    </>
  );
};

export default Music;

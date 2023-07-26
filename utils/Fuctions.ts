//for music player

export function formatTime(seconds : number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    let timeString = `${formattedMinutes}:${formattedSeconds}`

    if(timeString === "NaN:NaN"){
        return "00:00"
    }
    else{
        return timeString
    }
}



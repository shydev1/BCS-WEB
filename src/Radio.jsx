import React, { useEffect, useRef, useState } from 'react';
import Son from "../src/aw.png";

export default function Radio() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const playAudio = () => {
        if (!audioRef.current) {
            return;
        }

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    const handleReload = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current.load();
        }
    };

    return (
        <div>
            <div
                onClick={playAudio}
                className='fixed bottom-20 left-2 md:left-8 cursor-pointer justify-center items-center grid'
            >
                <audio
                    ref={audioRef}
                    src="https://stream-151.zeno.fm/qqukv2cm3p8uv?zs=tn1avVlnSQu1IozNVaQzrw"
                />
                <img
                    src={Son}
                    alt='Play/Pause'
                    className='h-10 w-auto shadow-2xl drop-shadow-2xl rounded-lg cursor-pointer animate-pulse'
                />
            </div>
        </div>
    );
}

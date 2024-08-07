// src/components/Reels.jsx
import React, { useRef, useState } from 'react';
import a from "../../assets/hero.mp4";
import b from "../../assets/h.mp4";
import c from "../../assets/hero1.mp4";

// Sample data for reels with video URLs
const reelsData = [
  { id: 1, videoUrl: b},
  { id: 2, videoUrl: a},
  { id: 3, videoUrl: c},
  { id: 4, videoUrl: a},
  { id: 5, videoUrl: b},
  { id: 6, videoUrl: a},
  { id: 7, videoUrl: c},
  // Add more videos as needed
];

const Reels = () => {
  const [currentRow, setCurrentRow] = useState(0);
  const videoContainerRef = useRef(null);
  const videosPerRow = 5; // Number of videos per row
  const maxRows = Math.ceil(reelsData.length / videosPerRow);

  const handleNextRow = () => {
    if (videoContainerRef.current) {
      videoContainerRef.current.scrollBy({
        left: videoContainerRef.current.offsetWidth,
        behavior: 'smooth',
      });
      setCurrentRow((prevRow) => Math.min(prevRow + 1, maxRows - 1));
    }
  };

  const handlePrevRow = () => {
    if (videoContainerRef.current) {
      videoContainerRef.current.scrollBy({
        left: -videoContainerRef.current.offsetWidth,
        behavior: 'smooth',
      });
      setCurrentRow((prevRow) => Math.max(prevRow - 1, 0));
    }
  };

  const videosToDisplay = reelsData.slice(currentRow * videosPerRow, (currentRow + 1) * videosPerRow);

  return (
    <section className="relative py-16 px-4 bg-gray-200 mt-8">
      <h1 className='font-light text-5xl text-center italic mb-8'>Reels Videos</h1>
      <div className="relative w-full overflow-hidden">
        {currentRow > 0 && (
            <button
            onClick={handlePrevRow}
            className="absolute left-4 bottom-3/4 transform -translate-y-1/2 bg-red-900 text-white p-3 rounded-full z-10"
            >
            &lt;
            </button>
        )}

        <div
            ref={videoContainerRef}
            className="relative flex overflow-x-auto scroll-smooth justify-center items-center"
        >
            {videosToDisplay.map((reel) => (
            <div key={reel.id} className="relative w-60 h-80 bg-white shadow-lg rounded-none overflow-hidden flex-shrink-0">
                <video
                src={reel.videoUrl}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                />
                <div className="absolute bottom-2 left-2 bg-gradient-to-t from-black to-transparent p-2">
                <p className="text-white text-sm font-semibold">{reel.userName}</p>
                </div>
            </div>
            ))}
        </div>

        {currentRow < maxRows - 1 && (
            <button
            onClick={handleNextRow}
            className="absolute right-4 bottom-3/4 transform -translate-y-1/2 bg-red-900 text-white p-3 rounded-full z-10"
            >
            &gt;
            </button>
        )}
      </div>
    </section>
  );
};

export default Reels;

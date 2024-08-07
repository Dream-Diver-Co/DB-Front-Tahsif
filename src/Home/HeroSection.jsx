
import hero from "../assets/hero.mp4";

const HeroSection = ({ onOpenModal }) => {

  return (
    <div className="relative w-full h-screen overflow-hidden bottom-8">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative flex flex-col items-center justify-center h-full text-white">
        
      </div>
    </div>
  );
};

export default HeroSection;

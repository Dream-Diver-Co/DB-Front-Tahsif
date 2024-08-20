import a from "../../assets/mm/1.avif";
import b from "../../assets/mm/2.avif";
import c from "../../assets/mm/3.avif";
import d from "../../assets/mm/4.avif";

const Reels = () => {
  return (
    <section className="relative py-16 px-4 mt-1">
      <h1 className='font-normal text-2xl text-center mb-6'>CURATED THIS SEASON</h1>
      <p className='font-medium text-center text-xs text-black text-opacity-40'>A blend of classic silhouettes and our signature shine, embodied by enigmatic sequins.</p>
      <div className="lg:flex mt-14 grid grid-cols-1 gap-4 lg:gap-4">
        {/* Card 1 */}
        <div className="relative w-full lg:w-96 group">
          <img src={c} alt="Slide 1" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            {/* Overlay Content */}
          </div>
        </div>
        {/* Card 2 */}
        <div className="relative w-full lg:w-96 group">
          <img src={b} alt="Slide 2" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            {/* Overlay Content */}
          </div>
        </div>
        {/* Card 3 */}
        <div className="relative w-full lg:w-96 group">
          <img src={a} alt="Slide 3" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            {/* Overlay Content */}
          </div>
        </div>
        {/* Card 4 */}
        <div className="relative w-full lg:w-96 group">
          <img src={d} alt="Slide 4" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            {/* Overlay Content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reels;

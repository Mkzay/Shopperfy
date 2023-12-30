import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse gap-14 p-10 md:gap-24 bg-gradient-to-r from-gradient1 to gradient2 lg:flex-row md:px-36">
      <div className="flex flex-1 flex-col items-start justify-center gap-4">
        <h3 className="text-lg font-bold md:text-xl">NEW ARRIVALS ONLY</h3>
        <div className="flex items-center gap-4">
          <h2 className="text-5xl font-semibold md:text-7xl">new</h2>
          <img className="w-2/12" src="hand_icon.png" alt="hand_icon" />
        </div>
        <h2 className="text-5xl font-semibold md:text-7xl">collections</h2>
        <h2 className="text-5xl font-semibold md:text-7xl">for everyone</h2>
        <button className="flex items-center justify-center gap-2 rounded-3xl w-8/12 h-11 text-lg text-white font-medium p-1 bg-[#ff4141] mt-4 md:w-5/12 md:h-12">
          <p>Latest collection</p>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <img className="w-80 md:w-9/12" src="hero_image.png" alt="hero_image" />
      </div>
    </div>
  );
};

export default Hero;

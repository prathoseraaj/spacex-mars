import spaceshipVideo from "../assets/spaceship.mp4";
const Starship = () => {
  return (
    <div className="h-[100vh] w-full relative bg-cover bg-center">
      <video
        className="absolute inset-0 w-full h-full object-cover "
        src={spaceshipVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative top-57 ml-12 items-center text-white">
        <h1 className="text-5xl font-bold">STARSHIP</h1>
        <p className="w-[528px] mt-5 leading-relaxed text-[15px] ">
          SpaceX’s Starship spacecraft and Super Heavy rocket – collectively
          referred to as Starship – represent a fully reusable transportation
          system designed to carry both crew and cargo to Earth orbit, the Moon,
          Mars and beyond. Starship is the world’s most powerful launch vehicle
          ever developed, capable of carrying up to 150 metric tonnes fully
          reusable and 250 metric tonnes expendable.
        </p>
        <button className="bg-black text-[13px] font-bold border-white border-2 px-8 py-4 mt-12 ">
          {" "}
          LEARN MORE ABOUT STARSHIP
        </button>
      </div>
    </div>
  );
};

export default Starship;

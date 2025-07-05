import spaceshipVideo from '../assets/spaceship.mp4';
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
    </div>
  );
};

export default Starship;

import marsOrbitVideo from '../assets/mars_orbit_animation.mp4';

const Orbit = () => {
  return (
    <div className="relative h-[100vh] w-full bg-cover bg-center overflow-hidden">
        <video className="absolute w-full h-full inset-0 object-cover"
                src={marsOrbitVideo} autoPlay loop muted playsInline/>
    </div>
  )
}

export default Orbit
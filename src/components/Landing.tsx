const Landing = () => {
  return (
    <div className="relative h-[100vh] w-full  ">
      <div
        className="absolute h-full w-full inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url('https://www.spacex.com/static/images/mars/2025_Update/mars_feature2_d.jpg')`,
        }}
      />
      <div className="relative top-87 text-white w-[560px] ml-12" >
        <h1 className="text-[40px] font-bold ">LANDING ON MARS</h1>
        <p className="mt-5 leading-relaxed">
          Starship will enter Mars' atmosphere at 7.5 kilometers per second and
          decelerate aerodynamically. The vehicle's heatshield is designed to
          withstand multiple entries, but given that the vehicle coming into
          Mars' atmosphere experiences higher levels of atomic oxygen, we expect
          to see harsher conditions during entry. The engineering video below
          shows actual Starship heatshield materials being tested in a
          simulatedMars atmosphere.
        </p>
        <button className="font-medium text-[14px] px-8 py-3 mt-10 border-2 border-white">WATCH VIDEO</button>
      </div>
    </div>
  );
};

export default Landing;

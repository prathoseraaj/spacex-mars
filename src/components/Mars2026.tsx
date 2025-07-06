const Mars2026 = () => {
  return (
    <div className="h-[100vh] w-full relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://www.spacex.com/static/images/mars/2025_Update/mars_feature1_d.jpg')`,
        }}
      />
      <div className="relative top-25 text-white w-[550px] ml-11">
        <h1 className="text-[42px] font-bold">MARS 2026</h1>
        <p className="mt-5 text-[15px] leading-relaxed">
          SpaceX is planning to launch the first Starships to Mars in 2026.
          These first vehicles will gather critical data on entry and landing,
          serving as the forerunners to future crew and cargo deliveries to the
          Martian surface.
        </p>
        <button className="border-2 broder-white px-3 py-4 mt-10 text-[13px] font-bold">WATCH PRESENTATION</button>
      </div>
    </div>
  );
};

export default Mars2026;

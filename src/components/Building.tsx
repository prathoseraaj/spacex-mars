const Building = () => {
  return (
    <div className="h-[100vh] w-full relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://www.spacex.com/static/images/mars/2025_Update/mars_carousel2_card2_d.jpg')`,
        }}
      />
      <div className="relative top-25 text-white w-[575px] ml-11">
        <h1 className="text-[42px] font-bold">BUILDING A CITY </h1>
        <p className="mt-3 text-[15px] leading-relaxed w-[450px]">
          Key technologies are required to establish a permanent home on Mars
          and provide opportunities for those on Earth to take part in making
          life multiplanetary. New industries will be needed for fields
          including power generation, resource mining, propellant production,
          construction, communication, and transportation.
        </p>
      </div>
    </div>
  );
};

export default Building;

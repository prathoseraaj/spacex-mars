const Human = () => {
  return (
    <div className="h-[100vh] w-full relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://www.spacex.com/static/images/mars/2025_Update/mars_carousel1_card2_d.jpg')`,
        }}
      />
      <div className="relative top-120 text-white w-[575px] ml-11">
        <h1 className="text-[42px] font-bold">FIRST HUMANS ON MARS</h1>
        <p className="mt-3 text-[15px] leading-relaxed w-[475px]">
          The first human explorers to visit Mars will lay the groundwork for
          permanent presence on the surface. Their mission objectives will
          include surveying local resources, preparing landing surfaces, setting
          up power generation, and building habitats.
        </p>
      </div>
    </div>
  );
};

export default Human;

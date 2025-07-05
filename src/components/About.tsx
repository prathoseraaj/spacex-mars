const About = () => {
  const aboutMars = [
    {
      id: 1,
      title: "Diameter",
      details: "6,791 km / 4,220 mi",
    },
    {
      id: 2,
      title: "Day Length",
      details: "24 hrs 37 min",
    },
    {
      id: 3,
      title: "Force of Gravity",
      details: "38% of Earth",
    },
    {
      id: 4,
      title: "Avg Distance from Earth",
      details: "225Mkm / 140Mmi",
    },
    {
      id: 5,
      title: "Age",
      details: "4.5 billion years",
    },
  ];
  return (
    <>
      <div className="relative h-[100vh] w-full jusitfy-center items-center">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url('https://www.spacex.com/static/images/mars/2025_Update/mars_whymars_d.jpg')`,
          }}
        />
        <div className="flex flex-col items-end mr-10 ">
          <div className="relative  text-white mt-23 ">
            <h1 className="text-[40px] font-bold font-sans">WHY MARS?</h1>
            <p className="w-[522px] mt-5 text-[15px] font-sans leading-relaxed">
              At an average distance of 140 million miles, Mars is one of
              Earth's closest habitable neighbors. Mars is about half again as
              far from the Sun as Earth is, so it still has decent sunlight. It
              is a little cold, but we can warm it up. Its atmosphere is
              primarily CO2 with some nitrogen and argon and a few other trace
              elements, which means that we can grow plants on Mars just by
              compressing the atmosphere. Gravity on Mars is about 38% of that
              of Earth, so you would be able to lift heavy things and bound
              around. Furthermore, the day is remarkably close to that of Earth.
            </p>
          </div>
          <ul className="relative text-white text-[13px] mt-10 font-bold">
            {aboutMars.map((about) => (
              <>
                <li key={about.id} className="flex justify-between gap-68 mt-5">
                  <span>{about.title}</span>
                  <span>{about.details}</span>
                </li>
                <hr className="text-gray-600 mt-5" />
              </>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-black h-[40vh] relative pt-10 text-white">
        <ul className="flex justify-center gap-40 "> 
          <li className="flex flex-col justify-center">
            <span className="flex justify-center text-[130px] font-sans">6</span>
            <span className="text-xl -mt-5">MONTH TO GET MARS</span>
          </li>
          <li className="flex flex-col">
            <span className="flex justify-center text-[130px] font-sans">2</span>
            <span className="text-xl -mt-5">MOON</span>
          </li>
          <li className="flex flex-col">
            <span className="flex justify-center text-[130px] font-sans">14</span>
            <span className="text-xl -mt-5">ORBITING SATELLITES</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;

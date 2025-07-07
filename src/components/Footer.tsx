const Footer = () => {
  return (
    <>
      <div className="bg-black h-[77vh] w-full flex justify-center items-center flex-col">
        <div className="h-[25vh] flex justify-center items-center">
          <div className="w-px h-35 bg-white" />
        </div>
        <div className="flex justify-center flex-col items-center">
          <p className="text-[13px] text-gray-400">
            For more information about crew and cargo missions to Earth orbit
            and beyond, contact
          </p>
          <p className="text-white text-[13px]">sales@spacex.com</p>
          <button className="text-white font-bold text-[13px] px-10 py-4 mt-8 border-2 border-white">
            CONTACT US
          </button>
        </div>
      </div>
      <ul className="flex bg-black h-[5vh] justify-center items-start text-[11px] font-extrabold gap-10 text-white">
        <li className="text-gray-500">SpaceX © 2025</li>
        <li>PRIVACY POLICY</li>
        <li>SUPPLIERS</li>
      </ul>
    </>
  );
};

export default Footer;

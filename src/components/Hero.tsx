const Hero = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-cover bg-center" style={{
        backgroundImage: 'url("https://www.spacex.com/static/images/mars/2025_Update/mars_hero_d.jpg")',
      }}>
        <div className="flex flex-col items-center justify-center mb-30 text-white">
          <h1 className="text-[88px] font-bold ">MARS & BEYOND</h1>
        <p>THE ROAD TO MAKING HUMANITY MULTIPLANETARY</p>
        </div>
    </div>
  )
}

export default Hero
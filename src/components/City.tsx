const City = () => {
  return (
    <div className="h-[100vh] relative w-full justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-center bg-cover" style={{backgroundImage:`url('https://www.spacex.com/static/images/mars/2025_Update/mars_carousel2_card1_d.jpg')`}}/>
        <div className="relative z-10 w-[545px] left-193 mt-25">
            <h2 className="text-white font-bold text-[42px]">A CITY ON MARS</h2>
            <p className="text-white text-[15px] mt-3 leading-relaxed">Establishing a self-sufficient city on Mars will require upwards of one million people and millions of tonnes of cargo to be delivered to the Red planet. By launching more than 10 times per day to maximize transfer windows that open up every approximately 26 months, several thousand Starships will ultimately transfer crew and equipment to build a lasting presence on another world.</p>
        </div>
    </div>
  )
}

export default City
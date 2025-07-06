import About from "./components/About"
import Building from "./components/Building"
import City from "./components/City"
import Hero from "./components/Hero"
import Human from "./components/Human"
import Landing from "./components/Landing"
import Mars2026 from "./components/Mars2026"
import Orbit from "./components/Orbit"
import Starship from "./components/Starship"


const App = () => {
  return (
    <div>
      <Hero/>
      <City/>
      <About/>
      <Starship/>
      <Orbit/>
      <Landing/>
      <Mars2026/>
      <Human/>
      <Building/>

    </div>
  )
}

export default App
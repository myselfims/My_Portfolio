import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Lenis from 'lenis'

function App() {
  const [darkMode,setDarkMode] = useState(false)

  const lenis = new Lenis({duration: 1, direction: 'alternate'})  

  useEffect(() => {
    // lenis.start()
    lenis.on('scroll', (e) => {
      console.log(e)
    })
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)
  },[])


  return (
    <div className={`${darkMode? 'bg-slate-900 text-white':'bg-white text-black'} `}>
      <nav className={`fixed z-20 w-full px-20 ${darkMode? 'bg-black':'bg-white'}`}>
        <NavigationBar setDarkMode={setDarkMode} darkMode={darkMode} />
      </nav>
      <div className={`px-20 max-sm:px-2 transition-all `}>
        <Home />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

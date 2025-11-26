import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Lenis from 'lenis'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const lenis = new Lenis({ duration: 1, direction: 'alternate' })

  useEffect(() => {
    // lenis.start()
    lenis.on('scroll', (e) => {
      // console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])


  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 text-slate-900'}`}>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${darkMode ? 'bg-black/70 border-white/10' : 'bg-white/70 border-black/5'} backdrop-blur-md border-b`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <NavigationBar setDarkMode={setDarkMode} darkMode={darkMode} />
        </div>
      </nav>
      <div className="px-6 md:px-12 lg:px-2 max-w-7xl mx-auto transition-all">
        <Home />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

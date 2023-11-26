import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [darkMode,setDarkMode] = useState(false)

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

import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TopAd from './components/TopAd/TopAd';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [sidebar, setSidebar] = useState(true);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <TopAd/>
        <Navbar handleSidebar={handleSidebar}/>
        <div className="absolute h-screen overflow-scroll scrollbar-hide z-10 top-20 sm:top-0">
          {sidebar && <Sidebar sidebar={sidebar} handleSidebar={handleSidebar} />}
        </div>
      </div>
    </>
  );
}

export default App;

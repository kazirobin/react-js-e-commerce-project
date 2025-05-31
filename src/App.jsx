import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/nav/Navbar";
import TopAd from './components/topAd/TopAd';

function App() {
  const [sidebar, setSidebar] = useState(true);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="relative h-screen overflow-hidden  ">
        <TopAd/>
        <Navbar handleSidebar={handleSidebar} />
        <div className="absolute top-0 left-0 bottom-0 overflow-hidden">
          {sidebar && <Sidebar handleSidebar={handleSidebar} />}
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import TopAd from "../TopAd/TopAd";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Navigation from "../Navigation/Navigation";

const Home = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="h-screen">
        <TopAd />
        <Navbar handleSidebar={handleSidebar} />
        <div className="w-0">
          {sidebar && (
            <Sidebar sidebar={sidebar} handleSidebar={handleSidebar} />
          )}
        </div>
        <Navigation />
      </div>
    </>
  );
};
export default Home;

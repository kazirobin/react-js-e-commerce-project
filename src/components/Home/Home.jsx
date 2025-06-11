import { useState } from "react";
import TopAd from "../TopAd/TopAd";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Navigation from "../Navigation/Navigation";
import Content from "../Content/Content";

const Home = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="h-screen
       flex flex-col overflow-hidden">
        <TopAd  />
        <Navbar handleSidebar={handleSidebar} />
        <div className="w-0">
          {sidebar && (
            <Sidebar sidebar={sidebar} handleSidebar={handleSidebar} />
          )}
        </div>
        <Navigation />
        <div className="bg-amber-200 flex-1 overflow-auto">

        <Content/>
        </div>
      </div>
    </>
  );
};
export default Home;

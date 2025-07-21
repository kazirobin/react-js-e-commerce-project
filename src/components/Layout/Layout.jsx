import TopAd from "./../TopAd/TopAd";
import Navbar from "./../Navbar/Navbar";
import Sidebar from "./../Sidebar/Sidebar";
import Navigation from "./../Navigation/Navigation";
import Footer from "./../Footer/Footer";
import { Outlet } from "react-router";
import { useSidebar } from "../../context/SidebarContext";

const Layout = () => {
  const { sidebar } = useSidebar();

  return (
    <>
      <div
        className="h-screen
       flex flex-col overflow-scroll scrollbar-hide"
      >
        <TopAd />
        <div className="sticky top-0 left-0 bg-white z-10">
          <Navbar />
        </div>
        <div className="w-0">{sidebar && <Sidebar />}</div>
        <Navigation />
        <div className="bg-amber-200">
          {/* here the children */}
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Layout;

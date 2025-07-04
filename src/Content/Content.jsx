import Banner from "./Banner/Banner";
import Footer from "../Footer/Footer";

const Content = () => {
  return (
    <div className="overflow-scroll scrollbar-hide h-full">
      <div className="main">
        <Banner />
      </div>

      <Footer />
    </div>
  );
};
export default Content;

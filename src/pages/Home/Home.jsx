import Products from '../Products/Products';
import Banner from './Banner/Banner';

const Home = () => {

  return (
    <>
     <div className="overflow-scroll scrollbar-hide h-full">
      <div className="main">
        <Banner />
        <Products/>
      </div>
    </div>
    </>
  );
};
export default Home;

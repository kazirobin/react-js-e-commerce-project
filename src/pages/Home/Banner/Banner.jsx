import images from "/src/assets/image-data.json";
import "./banner.css";
const Banner = () => {
  return (
    <div className="px-3 md:px-10 mx-auto my-4 grid gap-4 md:grid-cols-5">
      <div
        className="h-auto bg-center bg-no-repeat bg-[length:160%_110%] hover:bg-[length:165%_115%] rounded-2xl overflow-hidden transition-all md:col-span-3"
        style={{ backgroundImage: `url(${images[1].BannerImage.leftSide})` }}
      >
        <div className="py-17 ps-7  relative">
          <div
            className="bg-red-600 h-8 flex w-48 relative"
            style={{
              clipPath:
                "polygon(100% 0%, 95% 50%, 100% 100%, 0 98%, 0% 50%, 0 0)",
            }}
          >
            {" "}
            <h6 className="flex items-center ps-3 bg-red-600 text-white font-semibold">
              100% Farm Fresh Food
            </h6>{" "}
          </div>
          <h1 className="pacifico-regular text-3xl py-3">Fresh Organic</h1>
          <h5 className="font-bold text-2xl text-green-700">Food For All</h5>
          <h3 className="text-3xl font-bold py-3">$59.00</h3>
          <button className="rounded-full bg-green-700 text-white hover:bg-green-800 px-8 py-2 font-semibold cursor-pointer transition-all">
            Shop Now
          </button>
        </div>
      </div>
      <div className="grid gap-4 md:col-span-2">
        <div
          className="h-70 sm:col-span-2 bg-center bg-[length:140%_100%] hover:bg-[length:145%_105%] bg-no-repeat rounded-2xl overflow-hidden ps-6 pt-10 transition-all"
          style={{
            backgroundImage: `url(${images[1].BannerImage.rightTop})`,
          }}
        >
          <h1 className="font-extrabold text-xl">Premium Honeynuts</h1>
          <h5 className="font-bold py-2">100% Salted Organic Nut</h5>
          <h3 className="text-3xl font-bold text-red-600 pb-6">$15.00</h3>
          <button className="bg-white hover:bg-green-700 hover:text-white font-semibold rounded-3xl px-7 py-2 cursor-pointer transition-all">
            Shop Now
          </button>
        </div>
        <div
          className="h-90 md:h-60 bg-no-repeat bg-center bg-[length:110%_100%] hover:bg-[length:115%_105%] rounded-2xl overflow-hidden text-center text-white font-semibold transition-all"
          style={{
            backgroundImage: `url(${images[1].BannerImage.rightBottomLeft})`,
          }}
        >
          <h4 className="salsa-regular text-xl pt-4">New Baby Diaper</h4>
          <h6 className="text-sm">Top Quality Product</h6>
          <button className="text-black bg-white  hover:bg-green-700 hover:text-white font-semibold rounded-2xl px-4 py-1 mt-20 cursor-pointer transition-all">
            Shop Now
          </button>
        </div>
        <div
          className="p-5 h-90 md:h-60 bg-no-repeat bg-center bg-[length:110%_100%] hover:bg-[length:115%_105%] rounded-2xl overflow-hidden transition-all"
          style={{
            backgroundImage: `url(${images[1].BannerImage.rightBottomRight})`,
          }}
        >
          <h4 className="salsa-regular text-xl pt-4">Dark wash FaceWash</h4>
          <h6 className="font-bold text-sm text-green-700">All Fixed Size </h6>
          <button className="bg-white  hover:bg-green-700 hover:text-white font-semibold rounded-3xl px-7 py-2 my-20 cursor-pointer transition-all">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Banner;

import images from "../../assets/image-data.json"
const Banner = () => {

  return (
    <div className="md:h-screen px-3 md:px-10 mx-auto grid gap-4 md:grid-cols-2">
      <div className="bg-center bg-content rounded-2xl overflow-hidden" style={{backgroundImage:`url(${images[1].BannerImage.leftSide})`}}>
        <div className="">
          <div><h6>100% Farm Fresh Food</h6></div>
          <h1>Fresh Organic</h1>
          <h5>Food For All</h5>
          <h3>$59.00</h3>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="sm:col-span-2 bg-center bg-cover rounded-2xl overflow-hidden" style={{backgroundImage:`url(${images[1].BannerImage.rightTop})`}}>
          <h1>Premium Honeynuts</h1>
          <h5>100% Salted Organic Nut</h5>
          <h3>$15.00</h3>
          <button>Shop Now</button>
        </div>
        <div className="bg-left bg-auto rounded-2xl overflow-hidden" style={{backgroundImage:`url(${images[1].BannerImage.rightBottomLeft})`}}>
          <h4>New Baby Diaper</h4>
          <h6>Top Quality Product</h6>
          <button>Shop Now</button>
        </div>
        <div className="bg-center bg-cover rounded-2xl overflow-hidden" style={{backgroundImage:`url(${images[1].BannerImage.rightBottomRight})`}}>
          <h4>Dark wash FaceWash</h4>
          <h6>All Fixed Size</h6>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};
export default Banner;

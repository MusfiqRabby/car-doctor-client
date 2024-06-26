
import image1 from "../../../assets/images/banner/1.jpg";
import image2 from "../../../assets/images/banner/2.jpg";
import image3 from "../../../assets/images/banner/3.jpg";
import image4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={image1} className="w-full " />
    <div className="absolute h-full left-0 rounded-xl flex items-center top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
        <div className="text-white space-y-7 w-1/3 pl-12">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div >
            <button className="btn mr-5 bg-[#FF3811] text-white">Discover More</button>
            <button className="btn btn-outline text-white ">Latest Project</button>
            </div>
        </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-4 ">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-[#FF3811] text-white">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src={image2} className="w-full " />
    <div className="absolute h-full left-0 rounded-xl flex items-center top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
        <div className="text-white space-y-7 w-1/3 pl-12">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div >
            <button className="btn mr-5 bg-[#FF3811] text-white">Discover More</button>
            <button className="btn btn-outline text-white ">Latest Project</button>
            </div>
        </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-4 ">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-[#FF3811] text-white">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src={image3} className="w-full " />
    <div className="absolute h-full left-0 rounded-xl flex items-center top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
        <div className="text-white space-y-7 w-1/3 pl-12">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div >
            <button className="btn mr-5 bg-[#FF3811] text-white">Discover More</button>
            <button className="btn btn-outline text-white ">Latest Project</button>
            </div>
        </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-4 ">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-[#FF3811] text-white">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <img src={image4} className="w-full " />
    <div className="absolute h-full left-0 rounded-xl flex items-center top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
        <div className="text-white space-y-7 w-1/3 pl-12">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div >
            <button className="btn mr-5 bg-[#FF3811] text-white">Discover More</button>
            <button className="btn btn-outline text-white ">Latest Project</button>
            </div>
        </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-4 ">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-[#FF3811] text-white">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;
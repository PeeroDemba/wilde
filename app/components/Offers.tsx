import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  largeDesktop: {
    breakpoint: { max: 3000, min: 1536 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1535, min: 1280 },
    items: 4,
  },
  smalldesktop: {
    breakpoint: { max: 1279, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1023, min: 769 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 501 },
    items: 2,
  },
  smallmobile: {
    breakpoint: { max: 500, min: 320 },
    items: 1,
  },
};

function Offers() {
  return (
    <div className="xl:pl-40 lg:px-[7rem] pl-4 md:pl-16 mt-4 h-[45rem] mb-[10rem] relative">
      <p className="text-[20px] mb-8">
        We reserve the best rates for our friends, naturally
      </p>
      <div className="h-[45rem] pl-8 md:pl-24 lg:pl-0">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={false}
          infinite={false}
          keyBoardControl={true}
          customTransition="all 10"
          transitionDuration={1000}
          containerClass="carousel-container-custom-three"
          renderDotsOutside={false}
          removeArrowOnDeviceType={["smallmobile", "mobile"]}
        >
          <div className="flex h-[35rem] justify-start group flex-col gap-4 cursor-pointer mr-8 text-center">
            <div className="relative flex-col gap-4 flex top-0 left-0 h-[85%] w-full group-hover:bg-[#ebe0ce62] bg-transparent">
              <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#ebe0ce62] bg-transparent"></div>
              <p className="italic text-[20px]">An Offer Most Exquisite</p>
              <p className="text-[40px] leading-[50px] px-4 -mt-4">
                20% off 2+ Night Stays
              </p>
              <div className="flex justify-center border-r border-black/30">
                <img
                  src="/images/12.webp"
                  alt="Room 2"
                  className="object-contain h-full w-2/3"
                />
              </div>
              <div className="relative">
                <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#ebe0ce62] bg-transparent"></div>
                <p className="text-[18px] px-4">
                  Members get an extra 10% off. T&Cs apply.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                tabIndex={-1}
                className="py-2 px-2 w-4/5 rounded-[5rem] group-hover:bg-black group-hover:text-white border border-black italic text-[18px]"
              >
                Book your next trip
              </button>
            </div>
          </div>
          <div className="flex h-[35rem] justify-start group flex-col gap-4 cursor-pointer mr-8 text-center">
            <div className="relative flex-col gap-4 flex top-0 left-0 h-[85%] w-full group-hover:bg-[#ebe0ce62] bg-transparent">
              <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#ebe0ce62] bg-transparent"></div>
              <p className="italic text-[20px]">An Offer Most Exquisite</p>
              <p className="text-[40px] leading-[50px] px-4 -mt-4">
                20% off 2+ Night Stays
              </p>
              <div className="flex justify-center border-r border-black/30">
                <img
                  src="/images/12.webp"
                  alt="Room 2"
                  className="object-contain h-full w-2/3"
                />
              </div>
              <div className="relative">
                <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#ebe0ce62] bg-transparent"></div>
                <p className="text-[18px] px-4">
                  Book 30+ days in advance to save up to 30% off your stays.
                  T&Cs apply.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                tabIndex={-1}
                className="py-2 px-2 w-4/5 rounded-[5rem] group-hover:bg-black group-hover:text-white border border-black italic text-[18px]"
              >
                Sign up and save
              </button>
            </div>
          </div>
          <div className="flex h-[35rem] justify-start group flex-col gap-4 cursor-pointer mr-8 text-center">
            <div className="relative flex-col gap-4 flex top-0 left-0 h-[85%] w-full group-hover:bg-[#ebe0ce62] bg-transparent">
              <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#ebe0ce62] bg-transparent"></div>
              <p className="italic text-[20px]">An Offer Most Exquisite</p>
              <p className="text-[40px] leading-[50px] px-4 -mt-4">
                20% off 2+ Night Stays
              </p>
              <div className="flex justify-center border-r border-black/30">
                <img
                  src="/images/12.webp"
                  alt="Room 2"
                  className="object-contain h-full w-2/3"
                />
              </div>
              <div className="relative">
                <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#ebe0ce62] bg-transparent"></div>
                <p className="text-[18px] px-4">
                  Book 30+ days in advance to save up to 30% off your stays.
                  T&Cs apply.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                tabIndex={-1}
                className="py-2 px-2 w-4/5 rounded-[5rem] group-hover:bg-black group-hover:text-white border border-black italic text-[18px]"
              >
                Book your next trip
              </button>
            </div>
          </div>
          <div className="flex h-[35rem] justify-start group flex-col gap-4 cursor-pointer mr-8 text-center">
            <div className="relative flex-col gap-4 flex top-0 left-0 h-[85%] w-full group-hover:bg-[#ebe0ce62] bg-transparent">
              <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#ebe0ce62] bg-transparent"></div>
              <p className="italic text-[20px]">An Offer Most Exquisite</p>
              <p className="text-[40px] leading-[50px] px-4 -mt-4">
                20% off 2+ Night Stays
              </p>
              <div className="flex justify-center border-r border-black/30">
                <img
                  src="/images/12.webp"
                  alt="Room 2"
                  className="object-contain h-full w-2/3"
                />
              </div>
              <div className="relative">
                <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#ebe0ce62] bg-transparent"></div>
                <p className="text-[18px] px-4">
                  Book 30+ days in advance to save up to 30% off your stays.
                  T&Cs apply.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                tabIndex={-1}
                className="py-2 px-2 w-4/5 rounded-[5rem] group-hover:bg-black group-hover:text-white border border-black italic text-[18px]"
              >
                Book your next trip
              </button>
            </div>
          </div>
          <div className="flex h-[35rem] justify-start group flex-col gap-4 cursor-pointer mr-8 text-center">
            <div className="relative flex-col gap-4 flex top-0 left-0 h-[85%] w-full group-hover:bg-[#ebe0ce62] bg-transparent">
              <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#ebe0ce62] bg-transparent"></div>
              <p className="italic text-[20px]">An Offer Most Exquisite</p>
              <p className="text-[40px] leading-[50px] px-4 -mt-4">
                20% off 2+ Night Stays
              </p>
              <div className="flex justify-center border-r border-black/30">
                <img
                  src="/images/12.webp"
                  alt="Room 2"
                  className="object-contain h-full w-2/3"
                />
              </div>
              <div className="relative">
                <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#ebe0ce62] bg-transparent"></div>
                <p className="text-[18px] px-4">
                  Book 30+ days in advance to save up to 30% off your stays.
                  T&Cs apply.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                tabIndex={-1}
                className="py-2 px-2 w-4/5 rounded-[5rem] group-hover:bg-black group-hover:text-white border border-black italic text-[18px]"
              >
                Book your next trip
              </button>
            </div>
          </div>
          <div className="flex h-[35rem] justify-start group flex-col gap-4 cursor-pointer mr-8 text-center">
            <div className="relative flex-col gap-4 flex top-0 left-0 h-[85%] w-full group-hover:bg-[#ebe0ce62] bg-transparent">
              <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#ebe0ce62] bg-transparent"></div>
              <p className="italic text-[20px]">An Offer Most Exquisite</p>
              <p className="text-[40px] leading-[50px] px-4 -mt-4">
                20% off 2+ Night Stays
              </p>
              <div className="flex justify-center border-r border-black/30">
                <img
                  src="/images/12.webp"
                  alt="Room 2"
                  className="object-contain h-full w-2/3"
                />
              </div>
              <div className="relative">
                <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#ebe0ce62] bg-transparent"></div>
                <p className="text-[18px] px-4">
                  Book 30+ days in advance to save up to 30% off your stays.
                  T&Cs apply.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                tabIndex={-1}
                className="py-2 px-2 w-4/5 rounded-[5rem] group-hover:bg-black group-hover:text-white border border-black italic text-[18px]"
              >
                Book your next trip
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Offers;

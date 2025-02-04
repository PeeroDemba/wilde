import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  largeDesktop: {
    breakpoint: { max: 3000, min: 1536 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1535, min: 1280 },
    items: 3,
  },
  smalldesktop: {
    breakpoint: { max: 1279, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1023, min: 769 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 501 },
    items: 1,
  },
  smallmobile: {
    breakpoint: { max: 500, min: 320 },
    items: 1,
  },
};

function Offers() {
  return (
    <div className="xl:pl-40 lg:px-[7rem] pl-4 md:pl-16 mt-4 min-h-[45rem] mb-[10rem] relative">
      <p className="text-[20px] mb-8">
        We reserve the best rates for our friends, naturally
      </p>
      <div className="min-h-[45rem] pl-8 md:pl-24 lg:pl-0">
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
          <div className="flex min-h-[45rem] w-[20rem] justify-start group flex-col gap-4 cursor-pointer mr-8 text-center">
            <div className="relative flex-col gap-4 flex top-0 left-0 w-full group-hover:bg-[#ebe0ce62] bg-transparent">
              <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#ebe0ce62] bg-transparent"></div>
              <p className="italic text-[20px]">Membership Benefits</p>
              <p className="text-[40px] leading-[50px] px-4 -mt-4">
                10% off every stay
              </p>
              <div className="flex justify-center border-r border-black/30">
                <img
                  src="/images/wilde-promo-card-3.png"
                  alt="Promo Card 1"
                  className="object-contain h-full w-full"
                />
              </div>
              <div className="relative">
                <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#ebe0ce62] bg-transparent"></div>
                <p className="text-[18px] px-4">
                  Save on your next stay, and all after that.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-4 items-center h-20">
              <button
                tabIndex={-1}
                className="py-2 px-2 w-4/5 rounded-[5rem] group-hover:bg-black group-hover:text-white border border-black italic text-[18px]"
              >
                Sign up and save
              </button>
            </div>
          </div>
          <div className="flex min-h-[45rem] w-[20rem] justify-start group flex-col gap-4 cursor-pointer mr-8 text-center">
            <div className="relative flex-col gap-4 flex top-0 left-0 w-full group-hover:bg-[#ebe0ce62] bg-transparent">
              <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#ebe0ce62] bg-transparent"></div>
              <p className="italic text-[20px]">Changed your mind?</p>
              <p className="text-[40px] leading-[50px] px-4 -mt-4">
                Free Cancellation
              </p>
              <div className="flex justify-center border-r border-black/30">
                <img
                  src="/images/wilde-promo-card-2.png"
                  alt="Promo Card 2"
                  className="object-contain h-full w-full"
                />
              </div>
              <div className="relative">
                <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#ebe0ce62] bg-transparent"></div>
                <p className="text-[18px] px-4">
                  Until 3PM the day before you arrive.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-4 items-center h-20">
              <button
                tabIndex={-1}
                className="py-2 px-2 w-4/5 rounded-[5rem] group-hover:bg-black group-hover:text-white border border-black italic text-[18px]"
              >
                Start your booking now
              </button>
            </div>
          </div>
          <div className="flex min-h-[45rem] w-[20rem] justify-start group flex-col gap-4 cursor-pointer mr-8 text-center">
            <div className="relative flex-col gap-4 flex top-0 left-0 w-full group-hover:bg-[#ebe0ce62] bg-transparent">
              <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#ebe0ce62] bg-transparent"></div>
              <p className="italic text-[20px]">Early saver</p>
              <p className="text-[40px] leading-[50px] px-4 -mt-4">
                Up to 30% off 3+ Nights
              </p>
              <div className="flex justify-center border-r border-black/30">
                <img
                  src="/images/20.png"
                  alt="Promo Card 3"
                  className="object-contain h-[21rem] w-full"
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
            <div className="flex justify-center mt-4 items-center h-20">
              <button
                tabIndex={-1}
                className="py-2 px-2 w-4/5 rounded-[5rem] group-hover:bg-black group-hover:text-white border border-black italic text-[18px]"
              >
                Book your next trip
              </button>
            </div>
          </div>
          <div className="flex min-h-[45rem] w-[20rem] justify-start group flex-col gap-4 cursor-pointer mr-8 text-center">
            <div className="relative flex-col gap-4 flex top-0 left-0 w-full group-hover:bg-[#ebe0ce62] bg-transparent">
              <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#ebe0ce62] bg-transparent"></div>
              <p className="italic text-[20px]">Get comfy</p>
              <p className="text-[40px] leading-[50px] px-4 -mt-4">
                Stay longer for less
              </p>
              <div className="flex justify-center">
                <img
                  src="/images/wilde-promo-card-1.png"
                  alt="Promo Card 4"
                  className="object-contain h-full w-full"
                />
              </div>
              <div className="relative">
                <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#ebe0ce62] bg-transparent"></div>
                <p className="text-[18px] px-4">
                  Save up to 30% when you stay with us long term.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-4 items-center h-20">
              <button
                tabIndex={-1}
                className="py-2 px-2 w-4/5 rounded-[5rem] group-hover:bg-black group-hover:text-white border border-black italic text-[18px]"
              >
                Explore
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Offers;

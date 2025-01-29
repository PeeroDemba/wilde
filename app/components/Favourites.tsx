import { HiArrowTopRightOnSquare } from "react-icons/hi2";
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
    breakpoint: { max: 768, min: 320 },
    items: 1,
  },
};

function Favourites() {
  return (
    <div className="mt-[100px] px-4 md:px-[5rem] xl:pl-40 lg:pl-[7rem] h-[100vh] lg:h-[130vh] relative">
      <p className="lg:text-[60px] text-[45px] leading-[50px] mb-8">
        Our Favourites
      </p>
      <div className="lg:h-[100vh] h-[95vh]">
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
          containerClass="carousel-container-custom-two"
          renderDotsOutside={false}
          removeArrowOnDeviceType={["mobile"]}
        >
          <div className="flex h-[70vh] lg:h-[90vh] justify-start group flex-col relative gap-6 cursor-pointer mr-8">
            <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#c4673c62] bg-transparent"></div>
            <img
              src="/images/wilde_ls_1.webp"
              alt="Room 2"
              className="object-cover min-h-[50vh] lg:min-h-[70vh] w-full rounded-md"
            />
            <div className="relative">
              <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#c4673c62] bg-transparent"></div>
              <p className="lg:text-[2rem] text-[1.75rem] leading-[36px]">
                <span> Discovering London's Liverpool Street </span>
                <span>
                  <HiArrowTopRightOnSquare size="1rem" className="inline" />
                </span>
              </p>
            </div>
          </div>
          <div className="flex h-[70vh] lg:h-[90vh] justify-start group flex-col relative gap-6 cursor-pointer mr-8">
            <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#c4673c62] bg-transparent"></div>
            <img
              src="/images/wilde_ls_23a.webp"
              alt="Room 2"
              className="object-cover min-h-[50vh] lg:min-h-[70vh] w-full rounded-md"
            />
            <div className="relative">
              <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#c4673c62] bg-transparent"></div>
              <p className="lg:text-[2rem] text-[1.75rem] leading-[36px]">
                <span> Discovering London's Liverpool Street </span>
                <span>
                  <HiArrowTopRightOnSquare size="1rem" className="inline" />
                </span>
              </p>
            </div>
          </div>
          <div className="flex h-[70vh] lg:h-[90vh] justify-start group flex-col relative gap-6 cursor-pointer mr-8">
            <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#c4673c62] bg-transparent"></div>
            <img
              src="/images/wilde_ls_0.webp"
              alt="Room 2"
              className="object-cover min-h-[50vh] lg:min-h-[70vh] w-full rounded-md"
            />
            <div className="relative">
              <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#c4673c62] bg-transparent"></div>
              <p className="lg:text-[2rem] text-[1.75rem] leading-[36px]">
                <span> Discovering London's Liverpool Street </span>
                <span>
                  <HiArrowTopRightOnSquare size="1rem" className="inline" />
                </span>
              </p>
            </div>
          </div>
          <div className="flex h-[70vh] lg:h-[90vh] justify-start group flex-col relative gap-6 cursor-pointer mr-8">
            <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#c4673c62] bg-transparent"></div>
            <img
              src="/images/wilde_ls_1.webp"
              alt="Room 2"
              className="object-cover min-h-[50vh] lg:min-h-[70vh] w-full rounded-md"
            />
            <div className="relative">
              <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#c4673c62] bg-transparent"></div>
              <p className="lg:text-[2rem] text-[1.75rem] leading-[36px]">
                <span> Discovering London's Liverpool Street </span>
                <span>
                  <HiArrowTopRightOnSquare size="1rem" className="inline" />
                </span>
              </p>
            </div>
          </div>
          <div className="flex h-[70vh] lg:h-[90vh] justify-start group flex-col relative gap-6 cursor-pointer mr-8">
            <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#c4673c62] bg-transparent"></div>
            <img
              src="/images/wilde_ls_0.webp"
              alt="Room 2"
              className="object-cover min-h-[50vh] lg:min-h-[70vh] w-full rounded-md"
            />
            <div className="relative">
              <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#c4673c62] bg-transparent"></div>
              <p className="lg:text-[2rem] text-[1.75rem] leading-[36px]">
                <span> Discovering London's Liverpool Street </span>
                <span>
                  <HiArrowTopRightOnSquare size="1rem" className="inline" />
                </span>
              </p>
            </div>
          </div>
          <div className="flex h-[70vh] lg:h-[90vh] justify-start group flex-col relative gap-6 cursor-pointer mr-8">
            <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#c4673c62] bg-transparent"></div>
            <img
              src="/images/wilde_ls_23a.webp"
              alt="Room 2"
              className="object-cover min-h-[50vh] lg:min-h-[70vh] w-full rounded-md"
            />
            <div className="relative">
              <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#c4673c62] bg-transparent"></div>
              <p className="lg:text-[2rem] text-[1.75rem] leading-[36px]">
                <span> Discovering London's Liverpool Street </span>
                <span>
                  <HiArrowTopRightOnSquare size="1rem" className="inline" />
                </span>
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Favourites;

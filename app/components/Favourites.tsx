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
    breakpoint: { max: 768, min: 501 },
    items: 2,
  },
  smallmobile: {
    breakpoint: { max: 500, min: 320 },
    items: 1,
  },
};

function Favourites() {
  return (
    <div className="mt-[100px] px-4 md:px-[5rem] xl:pl-40 lg:pl-[7rem] h-[60rem] relative mb-[5rem]">
      <p className="lg:text-[60px] text-[45px] leading-[50px] mb-8">
        Our Favourites
      </p>
      <div className="h-[50rem]">
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
          removeArrowOnDeviceType={["smallmobile", "mobile"]}
        >
          <div className="flex h-[50rem] justify-start group flex-col relative gap-6 cursor-pointer mr-8">
            <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#c4673c62] bg-transparent"></div>
            <img
              src="/images/daniel-faro_dts-greece_r1-08377-0002_highres.webp"
              alt="Room 2"
              className="object-cover h-3/5 w-full rounded-md"
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
          <div className="flex h-[50rem] justify-start group flex-col relative gap-6 cursor-pointer mr-8">
            <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#c4673c62] bg-transparent"></div>
            <img
              src="/images/dts_movement_daniel_farC3B2_photos_id7204.webp"
              alt="Room 2"
              className="object-cover h-3/5 w-full rounded-md"
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
          <div className="flex h-[50rem] justify-start group flex-col relative gap-6 cursor-pointer mr-8">
            <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#c4673c62] bg-transparent"></div>
            <img
              src="/images/dts_daniel_faro_dinner_party_020.webp"
              alt="Room 2"
              className="object-cover h-3/5 w-full rounded-md"
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
          <div className="flex h-[50rem] justify-start group flex-col relative gap-6 cursor-pointer mr-8">
            <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#c4673c62] bg-transparent"></div>
            <img
              src="/images/alternative-london.webp"
              alt="Room 2"
              className="object-cover h-3/5 w-full rounded-md"
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
          <div className="flex h-[50rem] justify-start group flex-col relative gap-6 cursor-pointer mr-8">
            <div className="absolute top-0 left-0 h-full w-full group-hover:bg-[#c4673c62] bg-transparent"></div>
            <img
              src="/images/23-09-29-_london_amandafordyce_0603_final_web.webp"
              alt="Room 2"
              className="object-cover h-3/5 w-full rounded-md"
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

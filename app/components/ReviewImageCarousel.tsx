import { BsArrowLeftCircle } from "react-icons/bs";
import { IoMdPlay } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { data } from "../data.ts";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 1023, min: 320 },
    items: 1,
  },
};

function ReviewImageCarousel({
  setImageCarousel,
  index,
}: {
  setImageCarousel: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
}) {
  return (
    <section className="bg-[#ebe0ce] fixed top-0 left-0 w-full h-full lg:px-4 lg:py-16 z-[9999]">
      <div className="flex justify-center lg:mb-12">
        <BsArrowLeftCircle
          tabIndex={0}
          size="2.5rem"
          className="cursor-pointer fixed left-10 lg:left-16 top-16 bg-[#ebe0ce] rounded-full focus-visible:border focus-visible:rounded-md focus-visible:border-black "
          onClick={() => {
            setImageCarousel(false);
          }}
        />
        <p className="fixed top-[4.5rem]">
          {2} / {data[index].images.length * 2}
        </p>
        <MdCancel
          tabIndex={0}
          color="#ebe0ce"
          size="2.5rem"
          className="cursor-pointer fixed right-10 lg:right-16 top-16 bg-black rounded-full focus-visible:border focus-visible:rounded-md focus-visible:border-black "
          onClick={() => {
            setImageCarousel(false);
          }}
        />
      </div>
      <div className="md:mt-[10rem] lg:mt-0">
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
          dotListClass="dotlist-custom"
          containerClass="carousel-container-custom"
          itemClass="carousel-item"
          renderDotsOutside={true}
          removeArrowOnDeviceType={["mobile"]}
        >
          <div className="w-full flex justify-center group relative items-end lg:items-center">
            <img
              src={data[index].images[0]}
              alt="Room 1"
              className="lg:w-2/3 w-full"
            />
            <div className="p-8 flex absolute top-[calc((100%-128px)/2)] left-[calc((100%-128px)/2)] justify-center items-center group-hover:bg-black/80 rounded-full bg-black/40">
              <IoMdPlay size="4rem" className="pl-1 text-[#eee]" />
            </div>
          </div>
          <div className="w-full h-[67vh] flex justify-center items-end lg:items-center">
            <img
              src={data[index].images[1]}
              alt="Room 2"
              className="object-cover h-4/5 lg:h-full lg:w-2/3 w-full"
            />
          </div>
          <div className="w-full h-[67vh] flex justify-center items-end lg:items-center">
            <img
              src={data[index].images[2]}
              alt="Room 3"
              className="object-cover h-4/5 lg:h-full lg:w-2/3 w-full"
            />
          </div>
          <div className="w-full flex justify-center items-end lg:items-center">
            <img
              src={data[index].images[0]}
              alt="Room 1"
              className="object-cover h-full lg:w-2/3 w-full"
            />
          </div>
          <div className="w-full h-[67vh] flex justify-center items-end lg:items-center">
            <img
              src={data[index].images[1]}
              alt="Room 2"
              className="object-cover h-4/5 lg:h-full lg:w-2/3 w-full"
            />
          </div>
          <div className="w-full h-[67vh] flex justify-center items-end lg:items-center">
            <img
              src={data[index].images[2]}
              alt="Room 3"
              className="object-cover h-4/5 lg:h-full lg:w-2/3 w-full"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default ReviewImageCarousel;

import { FaStar } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";
import { MdOutlineImage } from "react-icons/md";
import ReviewsList from "./ReviewsList";
import ViewImages from "./ViewImages";
import ReviewImageCarousel from "./ReviewImageCarousel";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  mobile: {
    breakpoint: { max: 768, min: 320 },
    items: 1,
  },
};

function Reviews({
  openReviews,
  setOpenReviews,
  viewPhotos,
  setViewPhotos,
  data,
  index,
}: {
  openReviews: boolean;
  setOpenReviews: React.Dispatch<React.SetStateAction<boolean>>;
  viewPhotos: boolean;
  setViewPhotos: React.Dispatch<React.SetStateAction<boolean>>;
  data: {
    name: string;
    stars: string;
    reviews: string;
    images: string[];
    expand: string[];
    amenities: {
      title: string;
      image: string;
    }[];
  };
  index: number;
}) {
  const [imageCarousel, setImageCarousel] = useState(false);
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(5);

  return (
    <section className="lg:bg-[#ebe0ce] bg-[#f3ece2] mt-8 pt-16 xl:px-[12rem] px-0 md:px-[5rem] lg:px-[7rem] lg:border-none border-t border-b py-[5rem] lg:py-0 border-black/30">
      <div className="flex justify-between lg:flex-row flex-col lg:items-center mb-10 px-4 md:px-0">
        <p
          tabIndex={0}
          className="lg:text-[40px] text-[25px] cursor-pointer hover:text-[#3e6545]"
        >
          {data.name}
        </p>
        <div
          tabIndex={0}
          className="flex items-center gap-4 text-[18px] cursor-pointer"
          onClick={() => {
            setOpenReviews(true);
          }}
        >
          <div className="flex items-center gap-2">
            <FaStar />
            <p>{data.stars} Excellent</p>
          </div>
          <p className="underline decoration-2 underline-offset-2">
            ({data.reviews} Reviews)
          </p>
        </div>
      </div>
      <div className="md:hidden mb-20">
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
          containerClass="carousel-container-custom-four"
          renderDotsOutside={false}
          removeArrowOnDeviceType={["mobile"]}
        >
          <div
            tabIndex={0}
            className="group rounded-none md:rounded-tl-md md:rounded-bl-md h-full bg-no-repeat bg-cover flex justify-center items-center cursor-pointer"
          >
            <img src={data.images[0]} alt="" className="w-full h-full" />
            <div className="p-8 flex justify-center items-center group-hover:bg-black/80 absolute rounded-full bg-black/40">
              <IoMdPlay size="4rem" className="pl-1 text-[#eee]" />
            </div>
          </div>
          <div
            onClick={() => {
              setImageCarousel(true);
            }}
            tabIndex={0}
            className="rounded-tr-md h-1/2 bg-no-repeat bg-center cursor-pointer"
          >
            <img src={data.images[1]} alt="" className="w-full" />
            <div className="w-full h-full hover:bg-black/30"></div>
          </div>
          <div
            onClickCapture={() => {
              setImageCarousel(true);
            }}
            tabIndex={0}
            className="rounded-br-md h-1/2 bg-no-repeat bg-center cursor-pointer"
          >
            <img src={data.images[2]} alt="" className="w-full" />
            <div className="w-full relative h-full hover:bg-black/30"></div>
          </div>
        </Carousel>
      </div>
      <div className="hidden md:flex gap-[0.5rem] mb-16 max-h-[40rem]">
        <div
          tabIndex={0}
          className="relative w-[60%] max-h-full group rounded-none md:rounded-tl-md md:rounded-bl-md flex justify-center items-center cursor-pointer"
        >
          <img
            src={data.images[0]}
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="p-8 flex justify-center items-center group-hover:bg-black/80 rounded-full absolute top-[calc(50%-64px)] left-[calc(50%-64px)] bg-black/40">
            <IoMdPlay size="4rem" className="pl-1 text-[#eee]" />
          </div>
        </div>
        <div className="md:flex flex-col gap-2 hidden max-h-full w-[40%]">
          <div
            onClick={() => {
              setImageCarousel(true);
            }}
            tabIndex={0}
            className="rounded-tr-md cursor-pointer h-[calc(50%-4px)]"
          >
            <img
              src={data.images[1]}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="w-full h-full hover:bg-black/30"></div>
          </div>
          <div
            onClickCapture={() => {
              setImageCarousel(true);
            }}
            tabIndex={0}
            className="relative h-[calc(50%-4px)] rounded-br-md cursor-pointer"
          >
            <img
              src={data.images[2]}
              alt=""
              className="h-full object-cover w-full"
            />
            <div className="w-full relative hover:bg-black/30">
              <div
                onClickCapture={() => {
                  setImageCarousel(false);
                  setViewPhotos(true);
                }}
                tabIndex={0}
                className="absolute focus-visible:outline-white focus-visible:outline-1 bottom-6 hover:bg-slate-900 right-[5%] rounded-[5rem] bg-[#273f2bb3] px-3 py-1 flex gap-2 items-center text-white"
              >
                <MdOutlineImage />
                <p>View all photos (6)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openReviews && <ReviewsList setOpenReviews={setOpenReviews} />}
      {viewPhotos && <ViewImages index={index} setViewPhotos={setViewPhotos} />}
      {imageCarousel && (
        <ReviewImageCarousel
          index={index}
          setImageCarousel={setImageCarousel}
        />
      )}
      <div className="flex md:flex-row flex-col justify-between px-4 md:px-0">
        <div
          onClickCapture={() => {
            setViewPhotos(true);
            setImageCarousel(false);
          }}
          tabIndex={0}
          className="md:hidden border w-[15rem] border-black/30 rounded-[5rem] px-3 py-[0.4rem] mb-8 flex gap-3 items-center"
        >
          <MdOutlineImage />
          <p className="border-l border-black/30 pl-3">View all photos (62)</p>
        </div>
        <div className="flex flex-col gap-4">
          {data.expand.map((e, i) => (
            <div key={i} className="flex items-center gap-4 text-[20px]">
              <img src="/images/arrow.svg" alt="Right Arrow" />
              <p>{e}</p>
            </div>
          ))}
        </div>
        <div className="hidden lg:block">
          <button
            type="button"
            className="rounded-[4px] hover:bg-[#273f2b]/70 py-[14px] px-24 bg-[#273f2b] text-[#f3ece2]"
          >
            VIEW APARTHOTEL
          </button>
        </div>
      </div>
      <div className="mt-12 lg:border-b lg:border-black/25 px-4 md:px-0">
        <p className="italic text-[1.5rem] mb-8">Amenities</p>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 md:gap-12">
          {data.amenities
            .filter((_, i) => {
              if (i <= count) {
                return true;
              }
            })
            .map((e, i) => (
              <div key={i} className="flex flex-col gap-4">
                <img
                  src={`/images/${e.image}`}
                  alt="Amenity icons"
                  className="w-[60px] h-[60px]"
                />
                <p className="text-[1rem]">{e.title}</p>
              </div>
            ))}
        </div>
        {show ? (
          <div className="flex justify-center lg:justify-start">
            <button
              type="button"
              onClick={() => {
                setShow(false);
                setCount(5);
              }}
              tabIndex={0}
              className="bg-[#d1c7b6] rounded-[5rem] py-1 px-4 mt-16 lg:mb-24 mb-16"
            >
              Show less
            </button>
          </div>
        ) : (
          <div className="flex justify-center lg:justify-start">
            <button
              type="button"
              onClick={() => {
                setShow(true);
                setCount(data.amenities.length);
              }}
              tabIndex={0}
              className="bg-[#d1c7b6] rounded-[5rem] py-1 px-4 mt-16 lg:mb-24 mb-16"
            >
              Show all ({data.amenities.length})
            </button>
          </div>
        )}
      </div>
      <div className="lg:hidden block px-4 md:px-0">
        <button
          type="button"
          className="rounded-[4px] w-full hover:bg-[#273f2b]/70 py-[14px] px-10 bg-[#273f2b] text-[#f3ece2]"
        >
          VIEW APARTHOTEL
        </button>
      </div>
    </section>
  );
}

export default Reviews;

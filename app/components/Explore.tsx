import Favourites from "./Favourites";

function Explore() {
  return (
    <div className="bg-[#c4683c] py-24 md:py-40">
      <div className="flex lg:flex-row flex-col gap-12 lg:gap-20 px-4 lg:px-[7rem] md:px-[5rem] xl:px-40">
        <div className="flex flex-col gap-4">
          <p className="italic text-[28px]">Explore London</p>
          <p className="md:text-[80px] text-[50px] leading-[55px] font-medium md:leading-[80px]">
            A poke around the big smoke
          </p>
        </div>
        <div className="">
          <p className="text-[20px]">
            Oscar himself once quipped that London is "entirely composed now of
            beautiful idiots and brilliant lunatics", and we couldn't agree
            more. Five minutes spent meandering down this great city's winding
            streets and you too will be sucked in by its maddening charm. A
            cacophony of fascinating personalities, places and public transport
            (truly, the Victoria line is a marvel) - if this is insanity, we
            welcome it with open arms.
          </p>
        </div>
      </div>
      <Favourites />
      <div className="flex flex-col gap-20">
        <div className="xl:px-40 md:px-[5rem] px-4 lg:px-[7rem] flex flex-col gap-4">
          <p className="italic text-[24px] lg:text-[36px]">Explore Wilde</p>
          <p className="lg:text-[70px] text-[50px] leading-[55px] lg:leading-[75px]">
            Apartment freedom, hotel comforts{" "}
          </p>
          <p className="text-[24px]">
            All the comforts of home, but with fresher sheets.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-12 px-4 md:px-14">
          <div className="lg:w-full flex justify-center items-center w-full">
            <img
              src="/images/tinywow_group-2070_27466593.webp"
              alt=""
              className="w-24 lg:w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-between gap-12 md:gap-24">
            <p className="italic text-[1.5rem]">Flexible booking</p>
            <img src="/images/wilde-underline.svg" alt="Underline" />
          </div>
          <div className="flex flex-col justify-between gap-12 md:gap-24">
            <p className="italic text-[1.5rem]">Fitness room</p>
            <img src="/images/wilde-underline.svg" alt="Underline" />
          </div>
          <div className="lg:w-full flex justify-center items-center w-full">
            <img
              src="/images/tinywow_vector-2-_27466010.webp"
              alt=""
              className="w-24 lg:w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-between gap-12 md:gap-24">
            <p className="italic text-[1.5rem]">Breakfast & bar</p>
            <img src="/images/wilde-underline.svg" alt="Underline" />
          </div>
          <div className="flex flex-col justify-between gap-12 md:gap-24">
            <p className="italic text-[1.5rem]">Premium toiletries</p>
            <img src="/images/wilde-underline.svg" alt="Underline" />
          </div>
          <div className="lg:w-full flex justify-center items-center w-full">
            <img
              src="/images/tinywow_vector-3-_27466474.webp"
              alt=""
              className="w-24 lg:w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-between gap-12 md:gap-24">
            <p className="italic text-[1.5rem]">Free highspeed wi-fi</p>
            <img src="/images/wilde-underline.svg" alt="Underline" />
          </div>
          <div className="flex flex-col justify-between gap-12 md:gap-24">
            <p className="italic text-[1.5rem]">Laundry room</p>
            <img src="/images/wilde-underline.svg" alt="Underline" />
          </div>
          <div className="flex flex-col justify-between gap-12 md:gap-24">
            <p className="italic text-[1.5rem]">Nespresso machines</p>
            <img src="/images/wilde-underline.svg" alt="Underline" />
          </div>
        </div>
        <div className="flex justify-center px-4 md:px-12">
          <button className="py-4 rounded-md px-4 bg-black w-full lg:w-[45%] text-white hover:bg-black/35">
            WHAT IS AN APARTHOTEL?
          </button>
        </div>
      </div>
    </div>
  );
}

export default Explore;

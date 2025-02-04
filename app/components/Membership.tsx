import Offers from "./Offers";

function Membership() {
  return (
    <div className="bg-[#ebe0ce] py-24 md:py-40">
      <div className="xl:px-40 lg:px-[7rem] md:px-16 px-4">
        <div className="flex flex-col gap-2 lg:gap-4">
          <p className="italic text-[28px]">Become a member</p>
          <p className="lg:text-[60px] text-[45px] font-medium leading-[70px]">
            Join the Wilde–side
          </p>
        </div>
      </div>
      <Offers />
      <div className="lg:grid flex flex-col lg:grid-cols-2 gap-8 md:px-16 lg:px-[7rem] xl:px-40">
        <div className="flex flex-col gap-4 px-4 md:px-0">
          <p className="italic text-[24px]">Stay Smarter</p>
          <p className="lg:text-[70px] text-[55px] leading-[60px] lg:leading-[75px]">
            A smart and simple{" "}
            <span className="bg-[url('/images/wilde-underline.svg')] bg-no-repeat bg-bottom">
              formula
            </span>
          </p>
          <p className="text-[20px] mt-6 hidden lg:block">
            Get to know our sister brand
          </p>
          <div className="hidden lg:flex justify-start">
            <button className="py-4 rounded-md px-4 bg-[#273f2b] w-[17rem] text-white hover:bg-black/35">
              VISIT STAYCITY.COM
            </button>
          </div>
        </div>
        <div className="my-4 lg:my-0">
          <img
            src="/images/untitled-9_final_web.webp"
            alt="Woman sitting on a couch holding a yellow pillow"
          />
        </div>
        <p className="text-[20px] px-4 md:px-0 mt-2 lg:hidden block">
          Get to know our sister brand
        </p>
        <div className="lg:hidden flex justify-start -mt-3 px-4 md:px-0">
          <button className="py-3 rounded-md px-4 w-full bg-[#273f2b] text-[#ebe0ce] hover:bg-black/35">
            VISIT STAYCITY.COM
          </button>
        </div>
      </div>
    </div>
  );
}

export default Membership;
